import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../prisma';
import { authenticate, requireRole } from '../middleware/auth';

const router = Router();

// ============================================================================
// HELPER UTILITIES: IST TIMEZONE & SCHEDULING
// ============================================================================

const TIMEZONE_IST = 'Asia/Kolkata';

function getUserId(req: Request): string {
  return req.user?.id || (req.user as any)?.userId || '';
}

/** Resolve the stable Exam.id from the active portal slug for all student live-test operations. */
async function resolvePortal(req: Request, res: Response) {
  const rawSlug = req.query.portalSlug ?? req.body?.portalSlug ?? req.header('x-portal-slug');
  const slug = typeof rawSlug === 'string' ? rawSlug.trim().toLowerCase() : '';
  if (!slug) {
    res.status(400).json({ error: 'portalSlug is required for portal-scoped live test access.' });
    return null;
  }
  const exam = await prisma.exam.findUnique({
    where: { slug },
    select: { id: true, slug: true, title: true, shortName: true },
  });
  if (!exam) {
    res.status(404).json({ error: 'Requested examination portal was not found.' });
    return null;
  }
  const targetExamSlug = req.user?.targetExamId?.trim().toLowerCase();
  if (req.user?.role === 'STUDENT' && targetExamSlug && targetExamSlug !== slug) {
    res.status(403).json({ error: 'This live test belongs to a different examination portal.' });
    return null;
  }
  return exam;
}

// Public browsing is allowed, but decode a valid token so registration state
// and selected-portal authorization are evaluated consistently.
function optionalAuthenticate(req: Request, _res: Response, next: () => void) {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) return next();
  try {
    const decoded = jwt.verify(
      authHeader.slice('Bearer '.length),
      process.env.JWT_SECRET || 'examverse_super_secret_jwt_key_2025_prod_grade_xyz'
    ) as any;
    if (decoded?.id || decoded?.userId) {
      req.user = { ...decoded, id: decoded.id || decoded.userId, userId: decoded.id || decoded.userId };
    }
  } catch {
    // Protected operations still use authenticate; browsing remains anonymous.
  }
  next();
}

export function formatToIST(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: TIMEZONE_IST,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(d);
}

export function computeLiveScheduleDynamicStatus(schedule: any, now: Date = new Date()): string {
  if (schedule.status === 'CANCELLED' || schedule.status === 'DRAFT' || schedule.status === 'RESCHEDULED') {
    return schedule.status;
  }

  const start = new Date(schedule.startAt).getTime();
  const end = new Date(schedule.endAt).getTime();
  const regOpen = new Date(schedule.registrationOpenAt).getTime();
  const regClose = new Date(schedule.registrationCloseAt).getTime();
  const currentTime = now.getTime();
  const lateCutoff = start + (schedule.lateEntryMinutes || 15) * 60 * 1000;

  if (currentTime >= end) {
    return 'CONCLUDED';
  }
  if (currentTime >= start && (currentTime <= lateCutoff || schedule.lateEntryAllowed)) {
    return 'LIVE_NOW';
  }
  if (currentTime < start && start - currentTime <= 30 * 60 * 1000) {
    return 'STARTING_SOON';
  }
  if (currentTime >= regOpen && currentTime <= regClose) {
    return 'REGISTRATION_OPEN';
  }
  if (currentTime > regClose && currentTime < start) {
    return 'REGISTRATION_CLOSED';
  }
  if (currentTime < regOpen) {
    return 'UPCOMING';
  }
  return schedule.status || 'SCHEDULED';
}

// Conflict detection helper
async function detectSchedulingConflicts(
  examId: string,
  startAt: Date,
  endAt: Date,
  excludeScheduleId?: string
) {
  const activeSchedules = await prisma.liveTestSchedule.findMany({
    where: {
      examId,
      id: excludeScheduleId ? { not: excludeScheduleId } : undefined,
      status: { in: ['SCHEDULED', 'PUBLISHED', 'REGISTRATION_OPEN', 'LIVE_NOW'] },
      AND: [
        { startAt: { lt: endAt } },
        { endAt: { gt: startAt } },
      ],
    },
    include: {
      exam: { select: { title: true, shortName: true } },
      test: { select: { title: true } },
    },
  });

  return activeSchedules.map((s) => ({
    id: s.id,
    title: s.title,
    exam: s.exam.shortName,
    testTitle: s.test.title,
    startAt: s.startAt,
    endAt: s.endAt,
    startAtIST: formatToIST(s.startAt),
    endAtIST: formatToIST(s.endAt),
  }));
}

// Re-calculate Leaderboard ranks and percentiles for a concluded live test
async function recalculateLeaderboard(scheduleId: string) {
  const attempts = await prisma.liveTestAttempt.findMany({
    where: {
      scheduleId,
      attemptStatus: 'SUBMITTED',
    },
    orderBy: [
      { score: 'desc' },
      { timeSpentSeconds: 'asc' },
      { accuracyPct: 'desc' },
    ],
  });

  const total = attempts.length;
  if (total === 0) return;

  for (let i = 0; i < total; i++) {
    const rank = i + 1;
    // Standard percentile formula: ((total - rank) / total) * 100
    const percentile = total > 1 ? Number((((total - rank) / (total - 1)) * 100).toFixed(2)) : 100.0;

    await prisma.liveTestAttempt.update({
      where: { id: attempts[i].id },
      data: {
        rank,
        percentile,
      },
    });
  }
}

// ============================================================================
// SYSTEM TIME ENDPOINT (SYNCHRONIZATION FOR CLIENT COUNTDOWNS)
// ============================================================================

router.get('/time', (_req: Request, res: Response) => {
  const now = new Date();
  res.json({
    serverTimeUTC: now.toISOString(),
    timestamp: now.getTime(),
    timezone: TIMEZONE_IST,
    istFormatted: formatToIST(now),
  });
});

// ============================================================================
// ADMIN ROUTES: SCHEDULING, MANAGEMENT & MONITORING
// ============================================================================

// 1. Get weekly calendar view & list of all live test schedules
router.get('/admin/schedules', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { examId, status, weekStart, weekEnd } = req.query;

    const where: any = {};
    if (examId && examId !== 'all') {
      where.examId = String(examId);
    }
    if (status && status !== 'all') {
      where.status = String(status);
    }
    if (weekStart && weekEnd) {
      where.startAt = {
        gte: new Date(String(weekStart)),
        lte: new Date(String(weekEnd)),
      };
    }

    const schedules = await prisma.liveTestSchedule.findMany({
      where,
      include: {
        exam: {
          select: { id: true, slug: true, title: true, shortName: true },
        },
        test: {
          select: { id: true, title: true, totalQuestions: true, totalMarks: true, durationMinutes: true },
        },
        _count: {
          select: {
            registrations: true,
            attempts: true,
          },
        },
      },
      orderBy: { startAt: 'asc' },
    });

    const now = new Date();
    const formatted = schedules.map((s) => ({
      ...s,
      computedStatus: computeLiveScheduleDynamicStatus(s, now),
      startAtIST: formatToIST(s.startAt),
      endAtIST: formatToIST(s.endAt),
      registrationOpenAtIST: formatToIST(s.registrationOpenAt),
      registrationCloseAtIST: formatToIST(s.registrationCloseAt),
      registeredStudentsCount: s._count.registrations,
      attemptsCount: s._count.attempts,
    }));

    res.json({ schedules: formatted, serverTime: now.toISOString(), timezone: TIMEZONE_IST });
  } catch (error) {
    console.error('Error fetching admin live schedules:', error);
    res.status(500).json({ error: 'Failed to retrieve live test schedules' });
  }
});

// 2. Get Weekly Calendar matrix (Monday through Sunday)
router.get('/admin/calendar', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { referenceDate, examId } = req.query;
    const ref = referenceDate ? new Date(String(referenceDate)) : new Date();

    // Calculate Monday of the reference week in IST
    const dayOfWeek = ref.getDay(); // 0 is Sunday, 1 is Monday...
    const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(ref);
    monday.setDate(ref.getDate() + diffToMonday);
    monday.setHours(0, 0, 0, 0);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    sunday.setHours(23, 59, 59, 999);

    const schedules = await prisma.liveTestSchedule.findMany({
      where: {
        ...(examId && examId !== 'all' ? { examId: String(examId) } : {}),
        startAt: {
          gte: monday,
          lte: sunday,
        },
      },
      include: {
        exam: { select: { id: true, slug: true, title: true, shortName: true } },
        test: { select: { id: true, title: true, totalQuestions: true, totalMarks: true } },
        _count: { select: { registrations: true, attempts: true } },
      },
      orderBy: { startAt: 'asc' },
    });

    const now = new Date();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const calendarDays = days.map((dayName, idx) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + idx);
      const dateStr = d.toISOString().split('T')[0];

      const daySchedules = schedules
        .filter((s) => s.date === dateStr || s.startAt.toISOString().split('T')[0] === dateStr)
        .map((s) => ({
          ...s,
          computedStatus: computeLiveScheduleDynamicStatus(s, now),
          startAtIST: formatToIST(s.startAt),
          endAtIST: formatToIST(s.endAt),
        }));

      return {
        dayName,
        date: dateStr,
        isToday: dateStr === now.toISOString().split('T')[0],
        schedules: daySchedules,
      };
    });

    res.json({
      weekStart: monday.toISOString(),
      weekEnd: sunday.toISOString(),
      timezone: TIMEZONE_IST,
      calendarDays,
    });
  } catch (error) {
    console.error('Error loading weekly live calendar:', error);
    res.status(500).json({ error: 'Failed to load weekly live calendar' });
  }
});

// 3. Create a new Live Mock Test Schedule
router.post('/admin/schedules', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const {
      examId,
      testId,
      title,
      description,
      instructions,
      date,
      startAt,
      endAt,
      durationMinutes,
      registrationOpenAt,
      registrationCloseAt,
      maxCapacity,
      isPaid = false,
      price = 0.0,
      targetAudience = 'ALL',
      visibility = 'PUBLIC',
      status = 'SCHEDULED',
      lateEntryAllowed = true,
      lateEntryMinutes = 15,
      allowEarlySubmission = true,
      allowDisconnectionResume = true,
      resultPublishType = 'IMMEDIATE',
      resultPublishAt,
      isLeaderboardEnabled = true,
      forceSchedule = false, // allow override after seeing conflicts
    } = req.body;

    if (!examId || !testId || !title || !startAt || !durationMinutes) {
      res.status(400).json({ error: 'Missing required live test parameters (examId, testId, title, startAt, durationMinutes).' });
      return;
    }

    const start = new Date(startAt);
    const duration = Number(durationMinutes);
    const computedEnd = endAt ? new Date(endAt) : new Date(start.getTime() + duration * 60 * 1000);

    const regOpen = registrationOpenAt ? new Date(registrationOpenAt) : new Date(Date.now() - 3600 * 1000);
    const regClose = registrationCloseAt ? new Date(registrationCloseAt) : new Date(start.getTime());

    if (start.getTime() >= computedEnd.getTime()) {
      res.status(400).json({ error: 'Test Start Time must be strictly before End Time.' });
      return;
    }

    // Verify linked test exists and snapshot its questions
    const testRecord = await prisma.test.findUnique({
      where: { id: testId },
      include: {
        testQuestions: {
          select: {
            questionId: true,
            questionNumber: true,
            sectionName: true,
            marks: true,
            negativeMarks: true,
          },
          orderBy: { questionNumber: 'asc' },
        },
      },
    });

    if (!testRecord) {
      res.status(404).json({ error: 'Selected base mock test does not exist.' });
      return;
    }

    if (testRecord.examId !== examId) {
      res.status(400).json({ error: 'The selected mock test belongs to a different examination portal.' });
      return;
    }

    if (testRecord.testQuestions.length === 0) {
      res.status(400).json({ error: 'Selected mock test currently has 0 questions loaded and cannot be scheduled for live examination.' });
      return;
    }

    // Conflict detection
    const conflicts = await detectSchedulingConflicts(examId, start, computedEnd);
    if (conflicts.length > 0 && !forceSchedule) {
      res.status(409).json({
        warning: 'SCHEDULING_CONFLICT',
        message: `Scheduling overlap detected with ${conflicts.length} existing live test(s). Please verify timings or confirm override.`,
        conflicts,
      });
      return;
    }

    // Snapshot questions to lock question version
    const lockedSnapshot = JSON.stringify(testRecord.testQuestions);

    const schedule = await prisma.liveTestSchedule.create({
      data: {
        examId,
        testId,
        title: title.trim(),
        description: description?.trim() || null,
        instructions: instructions?.trim() || testRecord.instructionsEn,
        date: date || start.toISOString().split('T')[0],
        startAt: start,
        endAt: computedEnd,
        durationMinutes: duration,
        registrationOpenAt: regOpen,
        registrationCloseAt: regClose,
        timezone: TIMEZONE_IST,
        maxCapacity: maxCapacity ? Number(maxCapacity) : null,
        isPaid: Boolean(isPaid),
        price: Number(price) || 0.0,
        targetAudience,
        visibility,
        status: status || 'SCHEDULED',
        lateEntryAllowed: Boolean(lateEntryAllowed),
        lateEntryMinutes: Number(lateEntryMinutes) || 15,
        allowEarlySubmission: Boolean(allowEarlySubmission),
        allowDisconnectionResume: Boolean(allowDisconnectionResume),
        resultPublishType,
        resultPublishAt: resultPublishAt ? new Date(resultPublishAt) : null,
        isLeaderboardEnabled: Boolean(isLeaderboardEnabled),
        lockedQuestionsSnapshot: lockedSnapshot,
        createdBy: getUserId(req),
        updatedBy: getUserId(req),
      },
      include: {
        exam: { select: { shortName: true, title: true } },
        test: { select: { title: true, totalQuestions: true, totalMarks: true } },
      },
    });

    // Create system notification for aspirants
    await prisma.liveTestNotification.create({
      data: {
        scheduleId: schedule.id,
        title: `New Weekly Live Mock Test: ${schedule.title}`,
        message: `${schedule.exam.shortName} Live Mock Test scheduled for ${formatToIST(schedule.startAt)}. Registrations are now open.`,
        type: 'NEW_SCHEDULE',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Weekly Live Mock Test successfully scheduled.',
      schedule: {
        ...schedule,
        startAtIST: formatToIST(schedule.startAt),
        endAtIST: formatToIST(schedule.endAt),
      },
    });
  } catch (error: any) {
    console.error('Error creating live test schedule:', error);
    res.status(500).json({ error: error.message || 'Failed to create live mock test schedule' });
  }
});

// 4. Update / Edit Live Test Schedule
router.put('/admin/schedules/:id', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await prisma.liveTestSchedule.findUnique({
      where: { id },
      include: { _count: { select: { registrations: true, attempts: true } } },
    });

    if (!existing) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    if (existing._count.attempts > 0 && req.body.testId && req.body.testId !== existing.testId) {
      res.status(400).json({ error: 'Cannot change base test while students have already attempted or are attempting this live exam.' });
      return;
    }

    if (req.body.testId && req.body.testId !== existing.testId) {
      const replacementTest = await prisma.test.findFirst({
        where: { id: String(req.body.testId), examId: existing.examId },
        select: { id: true },
      });
      if (!replacementTest) {
        res.status(400).json({ error: 'The replacement mock test belongs to a different examination portal.' });
        return;
      }
    }

    const {
      title,
      description,
      instructions,
      date,
      startAt,
      endAt,
      durationMinutes,
      registrationOpenAt,
      registrationCloseAt,
      maxCapacity,
      isPaid,
      price,
      targetAudience,
      visibility,
      status,
      lateEntryAllowed,
      lateEntryMinutes,
      allowEarlySubmission,
      allowDisconnectionResume,
      resultPublishType,
      resultPublishAt,
      isLeaderboardEnabled,
    } = req.body;

    const start = startAt ? new Date(startAt) : existing.startAt;
    const duration = durationMinutes ? Number(durationMinutes) : existing.durationMinutes;
    const computedEnd = endAt ? new Date(endAt) : new Date(start.getTime() + duration * 60 * 1000);

    const updated = await prisma.liveTestSchedule.update({
      where: { id },
      data: {
        title: title !== undefined ? String(title).trim() : undefined,
        description: description !== undefined ? String(description).trim() : undefined,
        instructions: instructions !== undefined ? String(instructions).trim() : undefined,
        date: date || start.toISOString().split('T')[0],
        startAt: start,
        endAt: computedEnd,
        durationMinutes: duration,
        registrationOpenAt: registrationOpenAt ? new Date(registrationOpenAt) : undefined,
        registrationCloseAt: registrationCloseAt ? new Date(registrationCloseAt) : undefined,
        maxCapacity: maxCapacity !== undefined ? (maxCapacity ? Number(maxCapacity) : null) : undefined,
        isPaid: isPaid !== undefined ? Boolean(isPaid) : undefined,
        price: price !== undefined ? Number(price) : undefined,
        targetAudience: targetAudience || undefined,
        visibility: visibility || undefined,
        status: status || undefined,
        lateEntryAllowed: lateEntryAllowed !== undefined ? Boolean(lateEntryAllowed) : undefined,
        lateEntryMinutes: lateEntryMinutes !== undefined ? Number(lateEntryMinutes) : undefined,
        allowEarlySubmission: allowEarlySubmission !== undefined ? Boolean(allowEarlySubmission) : undefined,
        allowDisconnectionResume: allowDisconnectionResume !== undefined ? Boolean(allowDisconnectionResume) : undefined,
        resultPublishType: resultPublishType || undefined,
        resultPublishAt: resultPublishAt ? new Date(resultPublishAt) : undefined,
        isLeaderboardEnabled: isLeaderboardEnabled !== undefined ? Boolean(isLeaderboardEnabled) : undefined,
        updatedBy: getUserId(req),
      },
      include: {
        exam: { select: { shortName: true } },
        test: { select: { title: true } },
      },
    });

    res.json({
      success: true,
      message: 'Schedule updated successfully.',
      schedule: {
        ...updated,
        startAtIST: formatToIST(updated.startAt),
        endAtIST: formatToIST(updated.endAt),
      },
    });
  } catch (error: any) {
    console.error('Error updating live schedule:', error);
    res.status(500).json({ error: error.message || 'Failed to update schedule' });
  }
});

// 5. Emergency Cancellation of a Live Test
router.post('/admin/schedules/:id/cancel', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { reason = 'Administrative cancellation due to scheduling/technical adjustments' } = req.body;

    const schedule = await prisma.liveTestSchedule.findUnique({
      where: { id },
      include: {
        exam: { select: { shortName: true } },
        registrations: { select: { studentId: true } },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    const updated = await prisma.liveTestSchedule.update({
      where: { id },
      data: {
        status: 'CANCELLED',
        cancellationReason: reason,
        updatedBy: getUserId(req),
      },
    });

    // Notify all registered students
    const notifications = schedule.registrations.map((r) => ({
      scheduleId: schedule.id,
      userId: r.studentId,
      title: `Notice: ${schedule.title} Cancelled`,
      message: `The live mock test scheduled for ${formatToIST(schedule.startAt)} has been cancelled. Reason: ${reason}`,
      type: 'CANCELLED',
    }));

    if (notifications.length > 0) {
      await prisma.liveTestNotification.createMany({ data: notifications });
    }

    res.json({
      success: true,
      message: `Live mock test cancelled successfully. ${schedule.registrations.length} registered students notified.`,
      schedule: updated,
    });
  } catch (error: any) {
    console.error('Error cancelling live schedule:', error);
    res.status(500).json({ error: error.message || 'Failed to cancel live schedule' });
  }
});

// 6. Reschedule a Live Test
router.post('/admin/schedules/:id/reschedule', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { newStartAt, newEndAt, newDate, reason = 'Rescheduled to a revised time slot' } = req.body;

    if (!newStartAt) {
      res.status(400).json({ error: 'New start timestamp is required' });
      return;
    }

    const start = new Date(newStartAt);
    const existing = await prisma.liveTestSchedule.findUnique({
      where: { id },
      include: {
        registrations: { select: { studentId: true } },
      },
    });

    if (!existing) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    const end = newEndAt ? new Date(newEndAt) : new Date(start.getTime() + existing.durationMinutes * 60 * 1000);

    const updated = await prisma.liveTestSchedule.update({
      where: { id },
      data: {
        startAt: start,
        endAt: end,
        date: newDate || start.toISOString().split('T')[0],
        status: 'RESCHEDULED',
        cancellationReason: reason,
        updatedBy: getUserId(req),
      },
    });

    // Notify registered students
    const notifications = existing.registrations.map((r) => ({
      scheduleId: existing.id,
      userId: r.studentId,
      title: `Notice: ${existing.title} Rescheduled`,
      message: `The live test has been rescheduled to ${formatToIST(start)}. Your registration remains confirmed.`,
      type: 'RESCHEDULED',
    }));

    if (notifications.length > 0) {
      await prisma.liveTestNotification.createMany({ data: notifications });
    }

    res.json({
      success: true,
      message: 'Schedule successfully rescheduled and registered students notified.',
      schedule: {
        ...updated,
        startAtIST: formatToIST(updated.startAt),
        endAtIST: formatToIST(updated.endAt),
      },
    });
  } catch (error: any) {
    console.error('Error rescheduling live test:', error);
    res.status(500).json({ error: error.message || 'Failed to reschedule live test' });
  }
});

// 7. Duplicate a Live Test Schedule
router.post('/admin/schedules/:id/duplicate', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { newStartAt, newTitle } = req.body;

    const source = await prisma.liveTestSchedule.findUnique({
      where: { id },
    });

    if (!source) {
      res.status(404).json({ error: 'Source schedule not found' });
      return;
    }

    const start = newStartAt ? new Date(newStartAt) : new Date(source.startAt.getTime() + 7 * 24 * 60 * 60 * 1000); // Default to +7 days
    const end = new Date(start.getTime() + source.durationMinutes * 60 * 1000);

    const duplicated = await prisma.liveTestSchedule.create({
      data: {
        examId: source.examId,
        testId: source.testId,
        title: newTitle || `${source.title} (Series Duplicate)`,
        description: source.description,
        instructions: source.instructions,
        date: start.toISOString().split('T')[0],
        startAt: start,
        endAt: end,
        durationMinutes: source.durationMinutes,
        registrationOpenAt: new Date(start.getTime() - 48 * 3600 * 1000),
        registrationCloseAt: start,
        timezone: source.timezone,
        maxCapacity: source.maxCapacity,
        isPaid: source.isPaid,
        price: source.price,
        targetAudience: source.targetAudience,
        visibility: source.visibility,
        status: 'SCHEDULED',
        lateEntryAllowed: source.lateEntryAllowed,
        lateEntryMinutes: source.lateEntryMinutes,
        allowEarlySubmission: source.allowEarlySubmission,
        allowDisconnectionResume: source.allowDisconnectionResume,
        resultPublishType: source.resultPublishType,
        resultPublishAt: source.resultPublishAt,
        isLeaderboardEnabled: source.isLeaderboardEnabled,
        lockedQuestionsSnapshot: source.lockedQuestionsSnapshot,
        createdBy: getUserId(req),
        updatedBy: getUserId(req),
      },
    });

    res.status(201).json({
      success: true,
      message: 'Schedule duplicated successfully.',
      schedule: duplicated,
    });
  } catch (error: any) {
    console.error('Error duplicating live test:', error);
    res.status(500).json({ error: error.message || 'Failed to duplicate live test' });
  }
});

// 8. Create Weekly Recurring Series (e.g. 4 consecutive Sundays)
router.post('/admin/schedules/recurring', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const {
      examId,
      testId,
      titleBase,
      firstStartAt,
      durationMinutes,
      weeksCount = 4,
      isPaid = false,
      price = 0,
      lateEntryMinutes = 15,
    } = req.body;

    if (!examId || !testId || !titleBase || !firstStartAt) {
      res.status(400).json({ error: 'Missing parameters for recurring live schedule series.' });
      return;
    }

    const baseTest = await prisma.test.findFirst({
      where: { id: String(testId), examId: String(examId) },
      select: { id: true },
    });
    if (!baseTest) {
      res.status(400).json({ error: 'The selected recurring-series test belongs to a different examination portal.' });
      return;
    }

    const baseStart = new Date(firstStartAt);
    const duration = Number(durationMinutes) || 180;
    const seriesId = `series_${Date.now()}`;
    const createdList = [];

    for (let w = 0; w < Number(weeksCount); w++) {
      const start = new Date(baseStart.getTime() + w * 7 * 24 * 60 * 60 * 1000);
      const end = new Date(start.getTime() + duration * 60 * 1000);

      const sch = await prisma.liveTestSchedule.create({
        data: {
          examId,
          testId,
          title: `${titleBase} — Week ${w + 1}`,
          date: start.toISOString().split('T')[0],
          startAt: start,
          endAt: end,
          durationMinutes: duration,
          registrationOpenAt: new Date(start.getTime() - 5 * 24 * 3600 * 1000),
          registrationCloseAt: start,
          timezone: TIMEZONE_IST,
          isPaid: Boolean(isPaid),
          price: Number(price) || 0,
          status: 'SCHEDULED',
          recurringSeriesId: seriesId,
          lateEntryMinutes: Number(lateEntryMinutes) || 15,
          createdBy: req.user!.id,
          updatedBy: getUserId(req),
        },
      });
      createdList.push(sch);
    }

    res.status(201).json({
      success: true,
      message: `Recurring weekly series created with ${createdList.length} scheduled occurrences.`,
      seriesId,
      schedules: createdList,
    });
  } catch (error: any) {
    console.error('Error creating recurring series:', error);
    res.status(500).json({ error: error.message || 'Failed to create recurring series' });
  }
});

// 9. Live Monitoring Terminal (Real-time Proctoring Telemetry)
router.get('/admin/schedules/:id/monitor', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const schedule = await prisma.liveTestSchedule.findUnique({
      where: { id },
      include: {
        exam: { select: { shortName: true, title: true } },
        test: { select: { title: true, totalQuestions: true, totalMarks: true } },
        registrations: {
          include: {
            student: { select: { id: true, name: true, email: true, studentId: true } },
          },
          orderBy: { registeredAt: 'asc' },
        },
        attempts: {
          include: {
            student: { select: { id: true, name: true, email: true } },
          },
          orderBy: { startedAt: 'asc' },
        },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    const now = new Date();
    const registeredCount = schedule.registrations.length;
    const joinedCount = schedule.attempts.length;
    const inProgressCount = schedule.attempts.filter((a) => a.attemptStatus === 'IN_PROGRESS').length;
    const submittedCount = schedule.attempts.filter((a) => a.attemptStatus === 'SUBMITTED').length;
    const notStartedCount = Math.max(0, registeredCount - joinedCount);

    // Build participant monitoring rows
    const participants = schedule.registrations.map((reg) => {
      const att = schedule.attempts.find((a) => a.studentId === reg.studentId);
      return {
        studentId: reg.student.id,
        name: reg.student.name,
        email: reg.student.email,
        rollNo: reg.student.studentId || 'CBT-REG',
        registeredAt: reg.registeredAt,
        paymentStatus: reg.paymentStatus,
        hasJoined: Boolean(att),
        startedAt: att?.startedAt || null,
        submittedAt: att?.submittedAt || null,
        attemptStatus: att ? att.attemptStatus : 'NOT_JOINED',
        score: att?.score ?? null,
        accuracyPct: att?.accuracyPct ?? null,
        timeSpentSec: att?.timeSpentSeconds ?? 0,
        lateMinutesUsed: att?.lateMinutesUsed ?? 0,
      };
    });

    res.json({
      scheduleId: schedule.id,
      title: schedule.title,
      exam: schedule.exam.shortName,
      status: computeLiveScheduleDynamicStatus(schedule, now),
      serverTimeUTC: now.toISOString(),
      serverTimeIST: formatToIST(now),
      startAtIST: formatToIST(schedule.startAt),
      endAtIST: formatToIST(schedule.endAt),
      metrics: {
        registeredCount,
        joinedCount,
        inProgressCount,
        submittedCount,
        notStartedCount,
        participationRatePct: registeredCount > 0 ? Number(((joinedCount / registeredCount) * 100).toFixed(1)) : 0,
      },
      participants,
    });
  } catch (error) {
    console.error('Error fetching live monitor telemetry:', error);
    res.status(500).json({ error: 'Failed to fetch live monitoring telemetry' });
  }
});

// 10. Publish Results & Leaderboard trigger
router.post('/admin/schedules/:id/publish-results', authenticate, requireRole(['ADMIN', 'CONTENT_REVIEWER']), async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const schedule = await prisma.liveTestSchedule.findUnique({
      where: { id },
      include: {
        registrations: { select: { studentId: true } },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    // Re-calculate ranks & percentiles
    await recalculateLeaderboard(id);

    const updated = await prisma.liveTestSchedule.update({
      where: { id },
      data: {
        isResultsPublished: true,
        resultPublishAt: new Date(),
        status: 'CONCLUDED',
        updatedBy: getUserId(req),
      },
    });

    // Send result notification to all participants
    const notifications = schedule.registrations.map((r) => ({
      scheduleId: schedule.id,
      userId: r.studentId,
      title: `Official Results Published: ${schedule.title}`,
      message: `The live mock test scorecard and all-India leaderboard ranks are now live! Check your performance analysis.`,
      type: 'RESULTS_OUT',
    }));

    if (notifications.length > 0) {
      await prisma.liveTestNotification.createMany({ data: notifications });
    }

    res.json({
      success: true,
      message: 'Official results and Leaderboard rankings published successfully.',
      schedule: updated,
    });
  } catch (error: any) {
    console.error('Error publishing results:', error);
    res.status(500).json({ error: error.message || 'Failed to publish results' });
  }
});

// ============================================================================
// STUDENT ROUTES: REGISTRATION, TIMERS, LIVE ATTEMPT & RESULTS
// ============================================================================

// 1. Get Live Tests list for Students (Categorized)
router.get('/student/schedules', optionalAuthenticate, async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const userId = (req as any).user?.id || null;
    const portal = await resolvePortal(req, res);
    if (!portal) return;

    const schedules = await prisma.liveTestSchedule.findMany({
      where: {
        examId: portal.id,
        visibility: { in: ['PUBLIC', 'UNLISTED'] },
        test: { examId: portal.id },
      },
      include: {
        exam: {
          select: { id: true, slug: true, title: true, shortName: true },
        },
        test: {
          select: { id: true, title: true, totalQuestions: true, totalMarks: true, durationMinutes: true },
        },
        _count: {
          select: { registrations: true, attempts: true },
        },
        registrations: userId ? { where: { studentId: userId } } : false,
        attempts: userId ? { where: { studentId: userId } } : false,
      },
      orderBy: { startAt: 'asc' },
    });

    const enriched = schedules.map((s) => {
      const dynamicStatus = computeLiveScheduleDynamicStatus(s, now);
      const isRegistered = userId ? (s.registrations?.length || 0) > 0 : false;
      const userAttempt = userId && s.attempts && s.attempts.length > 0 ? s.attempts[0] : null;

      return {
        id: s.id,
        title: s.title,
        description: s.description,
        exam: s.exam,
        test: s.test,
        date: s.date,
        startAt: s.startAt,
        endAt: s.endAt,
        startAtIST: formatToIST(s.startAt),
        endAtIST: formatToIST(s.endAt),
        durationMinutes: s.durationMinutes,
        registrationOpenAt: s.registrationOpenAt,
        registrationCloseAt: s.registrationCloseAt,
        registrationOpenAtIST: formatToIST(s.registrationOpenAt),
        registrationCloseAtIST: formatToIST(s.registrationCloseAt),
        maxCapacity: s.maxCapacity,
        isPaid: s.isPaid,
        price: s.price,
        pricingType: s.isPaid ? 'PAID' : 'FREE',
        priceInr: s.price || 0,
        mockTestId: s.testId,
        totalQuestions: s.test?.totalQuestions || 0,
        totalMarks: s.test?.totalMarks || 0,
        status: dynamicStatus,
        dynamicStatus: dynamicStatus,
        lateEntryAllowed: s.lateEntryAllowed,
        lateEntryMinutes: s.lateEntryMinutes,
        isRegistered,
        canStartExam: dynamicStatus === 'LIVE_NOW' && isRegistered,
        userAttemptStatus: userAttempt ? userAttempt.attemptStatus : null,
        userScore: s.isResultsPublished && userAttempt ? userAttempt.score : null,
        userRank: s.isResultsPublished && userAttempt ? userAttempt.rank : null,
        isResultsPublished: s.isResultsPublished,
        isLeaderboardEnabled: s.isLeaderboardEnabled,
        registeredCount: s._count.registrations,
        isCapacityFull: Boolean(s.maxCapacity && s._count.registrations >= s.maxCapacity),
      };
    });

    const liveNow = enriched.filter((s) => s.status === 'LIVE_NOW');
    const registrationOpen = enriched.filter((s) => s.status === 'REGISTRATION_OPEN' && !s.isRegistered);
    const myRegistered = enriched.filter((s) => s.isRegistered && s.status !== 'CONCLUDED');
    const upcoming = enriched.filter((s) => s.status === 'UPCOMING' || (s.status === 'REGISTRATION_CLOSED' && !s.isRegistered));
    const completed = enriched.filter((s) => s.status === 'CONCLUDED');

    res.json({
      serverTime: now.toISOString(),
      timezone: TIMEZONE_IST,
      categories: {
        liveNow,
        registrationOpen,
        myRegistered,
        upcoming,
        completed,
      },
      allSchedules: enriched,
    });
  } catch (error) {
    console.error('Error fetching student live schedules:', error);
    res.status(500).json({ error: 'Failed to retrieve live mock tests' });
  }
});

// 2. Register for a Live Mock Test
router.post('/student/schedules/:id/register', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = getUserId(req);
    const now = new Date();
    const portal = await resolvePortal(req, res);
    if (!portal) return;

    const schedule = await prisma.liveTestSchedule.findFirst({
      where: { id, examId: portal.id, test: { examId: portal.id } },
      include: {
        exam: { select: { shortName: true } },
        _count: { select: { registrations: true } },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Live mock test schedule not found' });
      return;
    }

    if (schedule.status === 'CANCELLED') {
      res.status(400).json({ error: 'This live test has been cancelled and registrations are closed.' });
      return;
    }

    // Check registration time window
    if (now.getTime() > new Date(schedule.registrationCloseAt).getTime()) {
      res.status(400).json({ error: 'Registration for this live examination has closed.' });
      return;
    }

    // Check capacity
    if (schedule.maxCapacity && schedule._count.registrations >= schedule.maxCapacity) {
      res.status(400).json({ error: 'Maximum student capacity reached for this scheduled live examination.' });
      return;
    }

    // Check if already registered
    const existingReg = await prisma.liveTestRegistration.findUnique({
      where: {
        scheduleId_studentId: {
          scheduleId: id,
          studentId: userId,
        },
      },
    });

    if (existingReg) {
      res.json({
        success: true,
        alreadyRegistered: true,
        message: 'You are already registered for this Live Mock Test.',
        registration: existingReg,
      });
      return;
    }

    // Handle Paid Test vs Free Test
    let paymentStatus = 'FREE';
    let amountPaid = 0.0;

    if (schedule.isPaid && schedule.price > 0) {
      // Check for user subscription or entitlement
      const hasSub = await prisma.subscription.findFirst({
        where: {
          userId,
          status: 'ACTIVE',
          OR: [{ endDate: null }, { endDate: { gt: now } }],
        },
      });

      if (!hasSub) {
        res.status(402).json({
          error: 'PAYMENT_REQUIRED',
          message: `This is a Premium Live Mock Test (₹${schedule.price}). Please complete payment or subscribe to register.`,
          price: schedule.price,
        });
        return;
      }
      paymentStatus = 'PAID';
      amountPaid = schedule.price;
    }

    const reg = await prisma.liveTestRegistration.create({
      data: {
        scheduleId: id,
        studentId: userId,
        paymentStatus,
        amountPaid,
        registrationStatus: 'CONFIRMED',
      },
    });

    // In-app notification
    await prisma.liveTestNotification.create({
      data: {
        scheduleId: id,
        userId,
        title: `Registration Confirmed: ${schedule.title}`,
        message: `Your seat is reserved for ${schedule.exam.shortName} Live Mock Test on ${formatToIST(schedule.startAt)}. Be ready 5 minutes before scheduled start.`,
        type: 'REGISTRATION_CONFIRMED',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Successfully registered for Weekly Live Mock Test!',
      registration: reg,
      startAtIST: formatToIST(schedule.startAt),
    });
  } catch (error: any) {
    console.error('Error registering for live test:', error);
    res.status(500).json({ error: error.message || 'Failed to complete live test registration' });
  }
});

// 3. START LIVE TEST SESSION (CRITICAL SERVER-SIDE TIME & ELIGIBILITY ENFORCEMENT)
router.post('/student/schedules/:id/start', authenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = getUserId(req);
    const now = new Date();
    const currentTime = now.getTime();
    const portal = await resolvePortal(req, res);
    if (!portal) return;

    const schedule = await prisma.liveTestSchedule.findFirst({
      where: { id, examId: portal.id, test: { examId: portal.id } },
      include: {
        exam: true,
        test: {
          include: {
            patternVersion: {
              include: {
                sections: { orderBy: { order: 'asc' } },
              },
            },
            testQuestions: {
              include: {
                question: {
                  select: {
                    id: true,
                    questionType: true,
                    subject: true,
                    contentEn: true,
                    contentHi: true,
                    diagramUrl: true,
                    numericalTolerance: true,
                    optionsJson: true,
                    difficulty: true,
                    isPYQ: true,
                    pyqYear: true,
                    pyqShift: true,
                    sourceProvenance: true,
                    verificationStatus: true,
                    isAIGenerated: true,
                  },
                },
              },
              orderBy: { questionNumber: 'asc' },
            },
          },
        },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Live test schedule not found.' });
      return;
    }

    if (schedule.status === 'CANCELLED') {
      res.status(403).json({ error: `This live examination was cancelled: ${schedule.cancellationReason || 'Contact administration.'}` });
      return;
    }

    // 1. Verify Registration
    const reg = await prisma.liveTestRegistration.findUnique({
      where: {
        scheduleId_studentId: {
          scheduleId: id,
          studentId: userId,
        },
      },
    });

    if (!reg || reg.registrationStatus !== 'CONFIRMED') {
      res.status(403).json({
        error: 'NOT_REGISTERED',
        message: 'You have not registered for this live mock test session. Registration is required before entry.',
      });
      return;
    }

    // 2. Strict Server-Side Timing Enforcement
    const startTimestamp = new Date(schedule.startAt).getTime();
    const endTimestamp = new Date(schedule.endAt).getTime();
    const lateCutoff = startTimestamp + (schedule.lateEntryMinutes || 15) * 60 * 1000;

    // Check if test hasn't started yet
    if (currentTime < startTimestamp) {
      const waitSeconds = Math.ceil((startTimestamp - currentTime) / 1000);
      res.status(403).json({
        error: 'TEST_NOT_STARTED',
        message: `This live examination has not started yet. Server countdown is active.`,
        scheduledStartIST: formatToIST(schedule.startAt),
        remainingSecondsToStart: waitSeconds,
      });
      return;
    }

    // Check if late entry window has expired
    let lateMinutesUsed = 0;
    if (currentTime > startTimestamp) {
      lateMinutesUsed = Math.floor((currentTime - startTimestamp) / (60 * 1000));
    }

    // Check existing live attempt
    let liveAttempt = await prisma.liveTestAttempt.findUnique({
      where: {
        scheduleId_studentId: {
          scheduleId: id,
          studentId: userId,
        },
      },
    });

    // If new student joining late:
    if (!liveAttempt) {
      if (currentTime > lateCutoff && !schedule.lateEntryAllowed) {
        res.status(403).json({
          error: 'LATE_ENTRY_CLOSED',
          message: `The allowed late-entry window of ${schedule.lateEntryMinutes} minutes ended at ${formatToIST(new Date(lateCutoff))}. Joining is no longer permitted.`,
        });
        return;
      }
      if (currentTime >= endTimestamp) {
        res.status(403).json({
          error: 'TEST_CONCLUDED',
          message: 'This scheduled live examination has already concluded.',
        });
        return;
      }
    }

    // If already submitted
    if (liveAttempt && liveAttempt.attemptStatus === 'SUBMITTED') {
      res.json({
        isAlreadySubmitted: true,
        message: 'You have already submitted this Live Mock Test.',
        attemptId: liveAttempt.testAttemptId,
        score: liveAttempt.score,
        rank: liveAttempt.rank,
        isResultsPublished: schedule.isResultsPublished,
      });
      return;
    }

    // 3. Connect to / Create underlying TestAttempt in existing CBT Engine
    let testAttempt = liveAttempt?.testAttemptId
      ? await prisma.testAttempt.findUnique({ where: { id: liveAttempt.testAttemptId } })
      : null;

    if (!testAttempt) {
      testAttempt = await prisma.testAttempt.create({
        data: {
          userId,
          testId: schedule.testId,
          examId: schedule.examId,
          status: 'IN_PROGRESS',
          totalMarks: schedule.test.totalMarks,
          startedAt: now,
        },
      });
    }

    if (!liveAttempt) {
      liveAttempt = await prisma.liveTestAttempt.create({
        data: {
          scheduleId: id,
          studentId: userId,
          testAttemptId: testAttempt.id,
          startedAt: now,
          lateMinutesUsed,
          attemptStatus: 'IN_PROGRESS',
        },
      });
    }

    // Calculate exact remaining seconds based on server scheduled end timestamp
    const maxAllocatedSecs = schedule.durationMinutes * 60;
    const remainingToExamClose = Math.max(5, Math.floor((endTimestamp - currentTime) / 1000));
    // Remaining time cannot exceed allocated duration minus time spent
    const remainingTimeSeconds = Math.min(maxAllocatedSecs, remainingToExamClose);

    // Format questions according to standard CBT Simulator structure
    const formattedQuestions = schedule.test.testQuestions.map((tq) => {
      let parsedOptions = [];
      try {
        parsedOptions = JSON.parse(tq.question.optionsJson || '[]');
      } catch (e) {
        parsedOptions = [];
      }

      return {
        id: tq.question.id,
        testQuestionId: tq.id,
        questionId: tq.question.id,
        questionNumber: tq.questionNumber,
        sectionName: tq.sectionName,
        marks: tq.marks,
        negativeMarks: tq.negativeMarks,
        questionType: tq.question.questionType,
        subject: tq.question.subject,
        contentEn: tq.question.contentEn,
        contentHi: tq.question.contentHi,
        diagramUrl: tq.question.diagramUrl,
        numericalTolerance: tq.question.numericalTolerance,
        options: parsedOptions,
        difficulty: tq.question.difficulty,
        isPYQ: tq.question.isPYQ,
        pyqYear: tq.question.pyqYear,
        pyqShift: tq.question.pyqShift,
        sourceProvenance: tq.question.sourceProvenance,
        verificationStatus: tq.question.verificationStatus,
      };
    });

    let existingResponses = [];
    try {
      existingResponses = JSON.parse(testAttempt.responsesJson || '[]');
    } catch {
      existingResponses = [];
    }

    res.json({
      success: true,
      isLiveTest: true,
      scheduleId: schedule.id,
      scheduleTitle: schedule.title,
      attemptId: testAttempt.id,
      liveAttemptId: liveAttempt.id,
      remainingTimeSeconds,
      scheduledEndIST: formatToIST(schedule.endAt),
      test: {
        id: schedule.test.id,
        title: schedule.title,
        durationMinutes: schedule.durationMinutes,
        totalMarks: schedule.test.totalMarks,
        totalQuestions: schedule.test.totalQuestions,
        instructionsEn: schedule.instructions || schedule.test.instructionsEn,
        instructionsHi: schedule.test.instructionsHi,
        accessLevel: schedule.test.accessLevel,
        exam: {
          id: schedule.exam.id,
          title: schedule.exam.title,
          shortName: schedule.exam.shortName,
          slug: schedule.exam.slug,
        },
        patternVersion: schedule.test.patternVersion,
      },
      questions: formattedQuestions,
      savedResponses: existingResponses,
    });
  } catch (error: any) {
    console.error('Error starting live test:', error);
    res.status(500).json({ error: error.message || 'Failed to start live examination' });
  }
});

// 4. Student Live Test Results & Official Leaderboard
router.get('/student/schedules/:id/results', optionalAuthenticate, async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).user?.id || null;
    const portal = await resolvePortal(req, res);
    if (!portal) return;

    const schedule = await prisma.liveTestSchedule.findFirst({
      where: { id, examId: portal.id, test: { examId: portal.id } },
      include: {
        exam: { select: { shortName: true, title: true } },
        test: { select: { totalMarks: true, totalQuestions: true } },
        attempts: {
          where: { attemptStatus: 'SUBMITTED' },
          include: {
            student: { select: { id: true, name: true, studentId: true } },
          },
          orderBy: [
            { score: 'desc' },
            { timeSpentSeconds: 'asc' },
            { accuracyPct: 'desc' },
          ],
        },
      },
    });

    if (!schedule) {
      res.status(404).json({ error: 'Schedule not found' });
      return;
    }

    // Find student's scorecard
    const myAttempt = userId ? schedule.attempts.find((a) => a.studentId === userId) : null;

    // Leaderboard list (anonymized/privacy-preserving: shows rank, marks, accuracy, candidate initials)
    const leaderboard = schedule.isLeaderboardEnabled && schedule.isResultsPublished
      ? schedule.attempts.map((att, idx) => ({
          rank: att.rank || idx + 1,
          candidateName: att.student.name,
          score: att.score,
          accuracyPct: att.accuracyPct,
          percentile: att.percentile,
          timeSpentMinutes: Math.round(att.timeSpentSeconds / 60),
          isCurrentUser: userId === att.student.id,
        }))
      : [];

    res.json({
      scheduleId: schedule.id,
      title: schedule.title,
      exam: schedule.exam.shortName,
      isResultsPublished: schedule.isResultsPublished,
      resultPublishAtIST: schedule.resultPublishAt ? formatToIST(schedule.resultPublishAt) : null,
      myScorecard: myAttempt
        ? {
            score: myAttempt.score,
            totalMarks: schedule.test.totalMarks,
            accuracyPct: myAttempt.accuracyPct,
            rank: myAttempt.rank,
            percentile: myAttempt.percentile,
            totalAttempted: myAttempt.totalAttempted,
            totalCorrect: myAttempt.totalCorrect,
            totalIncorrect: myAttempt.totalIncorrect,
            timeSpentMinutes: Math.round(myAttempt.timeSpentSeconds / 60),
          }
        : null,
      leaderboard,
    });
  } catch (error) {
    console.error('Error fetching live test results:', error);
    res.status(500).json({ error: 'Failed to retrieve live test results' });
  }
});

// 5. In-app Live Test Notifications
router.get('/notifications', async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.id || null;

    const notifications = await prisma.liveTestNotification.findMany({
      where: {
        OR: [{ userId: null }, { userId }],
      },
      orderBy: { createdAt: 'desc' },
      take: 20,
    });

    res.json({ notifications });
  } catch (error) {
    console.error('Error fetching live test notifications:', error);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

export default router;
