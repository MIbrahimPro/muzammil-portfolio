from PIL import Image
import numpy as np

img = Image.open("/home/mibrahimpro/Documents/mdsr portfolio/ref-image.png").convert("L")
img.thumbnail((40, 20))
chars = np.array(list(" .:-=+*#%@"))
pixels = np.array(img)
normalized = (pixels - pixels.min()) / (pixels.max() - pixels.min() + 1e-6)
indices = (normalized * (len(chars) - 1)).astype(int)
for row in indices:
    print("".join(chars[row]))
