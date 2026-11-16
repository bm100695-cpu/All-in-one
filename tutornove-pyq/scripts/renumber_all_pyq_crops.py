import concurrent.futures
import glob
import json
import os
import sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import numpy as np

ROOT_DIR = Path(__file__).resolve().parent.parent.parent
JSON_DIR = ROOT_DIR / "tutornove-pyq" / "output" / "repaired_papers"
CROPS_DIR = ROOT_DIR / "client" / "public" / "pyq-crops"

FONT_PATH = "C:/Windows/Fonts/arialbd.ttf"
if not os.path.exists(FONT_PATH):
    FONT_PATH = "C:/Windows/Fonts/segoeuib.ttf"

def detect_and_renumber_header(img: Image.Image, new_q_num: int, font: ImageFont.FreeTypeFont) -> Image.Image:
    arr = np.array(img.convert('L'))
    h, w = arr.shape
    if h < 35 or w < 200:
        return img
    
    # Header row scan (rows 6 to 32)
    row_sub = arr[6:32, 15:250]
    row_dark = np.sum(row_sub < 180, axis=1)
    if not np.any(row_dark > 5):
        return img
    
    y_min_rel = np.where(row_dark > 5)[0][0]
    y_max_rel = np.where(row_dark > 5)[0][-1]
    y0 = 6 + y_min_rel - 2
    y1 = 6 + y_max_rel + 3

    # Column scan to find where 'Q...' starts and ends
    col_sub = arr[y0:y1, 15:220]
    col_dark = np.sum(col_sub < 180, axis=0)
    
    dark_cols = np.where(col_dark > 2)[0]
    if len(dark_cols) == 0:
        return img
    
    x0 = 15 + dark_cols[0] - 2
    
    # Find gap after 'Q<num>.'
    x_end = None
    for i in range(dark_cols[0] + 12, min(len(col_dark) - 5, 120)):
        if np.all(col_dark[i:i+5] <= 1):
            x_end = 15 + i
            break
            
    if x_end is None:
        x_end = x0 + 45
        
    out = img.copy()
    draw = ImageDraw.Draw(out)
    draw.rectangle([x0 - 2, y0 - 1, x_end + 1, y1 + 1], fill=(255, 255, 255))
    text = f"Q{new_q_num}."
    draw.text((x0, y0 + 1), text, fill=(15, 23, 42), font=font)
    return out

def process_paper(json_file_path: str) -> dict:
    json_path = Path(json_file_path)
    paper_key = json_path.stem
    crop_folder = CROPS_DIR / paper_key
    
    if not crop_folder.exists():
        return {"paperKey": paper_key, "count": 0, "status": "no_crop_folder"}
        
    with open(json_path, "r", encoding="utf-8") as f:
        paper_data = json.load(f)
        
    font = ImageFont.truetype(FONT_PATH, 15)
    renumbered_count = 0
    
    for q in paper_data.get("questions", []):
        q_num = q["questionNumber"]
        orig_num = q.get("originalQNum")
        
        orig_crop = crop_folder / f"q{orig_num}.webp"
        seq_crop = crop_folder / f"q_seq_{q_num}.webp"
        
        # Check if source crop exists
        src_path = orig_crop if orig_crop.exists() else (seq_crop if seq_crop.exists() else None)
        if src_path and src_path.exists():
            try:
                img = Image.open(src_path)
                renumbered = detect_and_renumber_header(img, q_num, font)
                # Save both q_seq_{q_num}.webp AND update q{orig_num}.webp
                renumbered.save(seq_crop, "WEBP", quality=85)
                renumbered.save(orig_crop, "WEBP", quality=85)
                renumbered_count += 1
            except Exception as e:
                pass
                
        # Update diagramUrl in JSON
        q["diagramUrl"] = f"/pyq-crops/{paper_key}/q_seq_{q_num}.webp"
        
    # Write updated JSON
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(paper_data, f, indent=2)
        
    return {"paperKey": paper_key, "count": renumbered_count, "status": "ok"}

def main():
    json_files = sorted(glob.glob(str(JSON_DIR / "*.json")))
    print(f"Starting sequential renumbering for {len(json_files)} papers...")
    
    total_processed = 0
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(process_paper, jf): jf for jf in json_files}
        for future in concurrent.futures.as_completed(futures):
            res = future.result()
            total_processed += res["count"]
            print(f"  [DONE] {res['paperKey']}: {res['count']} questions renumbered")
            
    print(f"\nAll papers processed! Total questions renumbered: {total_processed}")

if __name__ == "__main__":
    main()
