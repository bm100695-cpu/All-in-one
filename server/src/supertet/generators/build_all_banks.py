# Python script to build the remaining 6 Super TET banks with authentic, high-quality bilingual questions
import os
import json

BANK_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "banks"))
os.makedirs(BANK_DIR, exist_ok=True)

def escape_ts(s: str) -> str:
    if s is None:
        return ""
    return s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ").replace("\r", "")

def format_q(subject, topic, chapter, content_hi, content_en, correct, distractors, exp_hi, exp_en, diff="MEDIUM", extra=None):
    c_hi = escape_ts(correct[0])
    c_en = escape_ts(correct[1])
    d0_hi, d0_en = escape_ts(distractors[0][0]), escape_ts(distractors[0][1])
    d1_hi, d1_en = escape_ts(distractors[1][0]), escape_ts(distractors[1][1])
    d2_hi, d2_en = escape_ts(distractors[2][0]), escape_ts(distractors[2][1])
    
    extra_str = ""
    if extra:
        extra_parts = []
        for k, v in extra.items():
            extra_parts.append(f"{k}: '{escape_ts(str(v))}'")
        extra_str = f", {{ {', '.join(extra_parts)} }}"

    return f"""  q(
    '{escape_ts(topic)}',
    '{escape_ts(chapter)}',
    '{escape_ts(content_hi)}',
    '{escape_ts(content_en)}',
    ['{c_hi}', '{c_en}'],
    [
      ['{d0_hi}', '{d0_en}'],
      ['{d1_hi}', '{d1_en}'],
      ['{d2_hi}', '{d2_en}'],
    ],
    '{escape_ts(exp_hi)}',
    '{escape_ts(exp_en)}',
    '{diff}'{extra_str}
  )"""

print("Starting generation of missing Super TET question banks...")
