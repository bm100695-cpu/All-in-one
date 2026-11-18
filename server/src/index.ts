import dotenv from 'dotenv';
dotenv.config();

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import examRoutes from './routes/exam.routes';
import testRoutes from './routes/test.routes';
import mistakeRoutes from './routes/mistake.routes';
import analyticsRoutes from './routes/analytics.routes';
import aiRoutes from './routes/ai.routes';
import adminRoutes from './routes/admin.routes';
import monetizationRoutes from './routes/monetization.routes';
import uptetRoutes from './routes/uptet.routes';
import supertetRoutes from './routes/supertet.routes';
import liveTestRoutes from './routes/live_test.routes';

const app = express();
const PORT = process.env.PORT || 5000;

// Security & Middlewares
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: '10mb',
    verify: (req: any, _res: Response, buf: Buffer) => {
      req.rawBody = buf.toString('utf8');
    },
  })
);
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req: Request, _res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    service: 'All in One AI Engine',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/mistakes', mistakeRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/monetization', monetizationRoutes);
app.use('/api/uptet', uptetRoutes);
app.use('/api/super-tet', supertetRoutes);
app.use('/api/live-tests', liveTestRoutes);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

app.listen(PORT, () => {
  console.log(`🚀 All in One AI Server running at http://localhost:${PORT}`);
  console.log(`📡 Health check accessible at http://localhost:${PORT}/health`);
});
