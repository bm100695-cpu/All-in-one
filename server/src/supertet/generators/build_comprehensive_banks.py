# -*- coding: utf-8 -*-
"""
Master generator for the 6 missing Super TET banks:
1. gk_part2.ts: Indian History, Freedom Struggle, Indian Polity & Constitution
2. gk_part5.ts: Current Affairs, UP/Central Schemes, Sports, Days, Summits, Science
3. hindi_grammar_part1.ts: Core Hindi Grammar, Varnamala, Shabd Bhed, Alankar, Ras, Chhand, Muhavare, Vilom, Paryayvachi
4. teaching_part2.ts: Teaching Principles, History of Education, Inclusive Ed, RTE 2009, NCF 2005, NEP 2020, CCE, Admin
5. lifeskills_part2.ts: Motivation, Maslow, Teacher Role, Constitutional Values, Reward & Punishment
6. cdp_part3.ts: Piaget, Vygotsky, Kohlberg, Bruner, Kohler, CWSN, Inclusive Classroom Environment
"""
import os
import sys

BANK_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "banks"))
os.makedirs(BANK_DIR, exist_ok=True)

def esc(s):
    if s is None:
        return ""
    return str(s).replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ").replace("\r", "").strip()

def make_q_str(topic, chapter, c_hi, c_en, corr, dists, exp_hi, exp_en, diff="MEDIUM", ref_date=None, extra_key=None, extra_val=None):
    extras = []
    if ref_date:
        extras.append(f"referenceDate: '{esc(ref_date)}'")
    if extra_key and extra_val:
        extras.append(f"{extra_key}: '{esc(extra_val)}'")
    extra_str = f", {{ {', '.join(extras)} }}" if extras else ""

    return f"""  q(
    '{esc(topic)}',
    '{esc(chapter)}',
    '{esc(c_hi)}',
    '{esc(c_en)}',
    ['{esc(corr[0])}', '{esc(corr[1])}'],
    [
      ['{esc(dists[0][0])}', '{esc(dists[0][1])}'],
      ['{esc(dists[1][0])}', '{esc(dists[1][1])}'],
      ['{esc(dists[2][0])}', '{esc(dists[2][1])}'],
    ],
    '{esc(exp_hi)}',
    '{esc(exp_en)}',
    '{diff}'{extra_str}
  ),"""

print("Building 6 complete Super TET question banks...")
