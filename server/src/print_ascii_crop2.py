from PIL import Image
import numpy as np

img = Image.open('client/public/pyq-crops/JEE_MAIN_2021_08_27_SHIFT_2/q23.webp')
arr = np.array(img.convert('L'))

# Check columns around x=20 to x=65 in rows 8 to 25
sub = arr[8:25, 20:65]
print("q23.webp header region dark pixels:", np.sum(sub < 180))
for r in range(0, sub.shape[0], 2):
    line = "".join(["#" if sub[r, c] < 180 else " " for c in range(sub.shape[1])])
    print(line)

