import os
import glob
from PIL import Image

BRANDS_DIR = "/home/mibrahimpro/Documents/mdsr portfolio/public/brands"
OUTPUT_DIR = "/home/mibrahimpro/Documents/mdsr portfolio/public/brands_processed"

os.makedirs(OUTPUT_DIR, exist_ok=True)

def process_logo(file_path):
    # Open original image
    img = Image.open(file_path).convert("RGBA")
    
    # Process pixels: make white/near-white pixels transparent
    datas = img.getdata()
    new_data = []
    for item in datas:
        r, g, b, a = item
        if a < 10:
            new_data.append((0, 0, 0, 0))
        elif r > 235 and g > 235 and b > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append((r, g, b, a))
            
    img.putdata(new_data)
    
    # Get tight bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img_cropped = img.crop(bbox)
    else:
        img_cropped = img

    cw, ch = img_cropped.size
    if cw == 0 or ch == 0:
        return

    # Canvas dimensions
    CANVAS_W, CANVAS_H = 200, 80
    MAX_W, MAX_H = 176, 52
    
    aspect = cw / ch
    
    if aspect > 2.0:
        target_w = MAX_W
        target_h = min(MAX_H, int(target_w / aspect))
    elif aspect < 1.3:
        target_h = MAX_H
        target_w = min(MAX_W, int(target_h * aspect))
    else:
        target_w = int(MAX_W * 0.9)
        target_h = min(MAX_H, int(target_w / aspect))
        if target_h > MAX_H:
            target_h = MAX_H
            target_w = int(target_h * aspect)

    img_resized = img_cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # Create final transparent canvas
    canvas = Image.new("RGBA", (CANVAS_W, CANVAS_H), (0, 0, 0, 0))
    paste_x = (CANVAS_W - target_w) // 2
    paste_y = (CANVAS_H - target_h) // 2
    canvas.paste(img_resized, (paste_x, paste_y), img_resized)

    filename = os.path.basename(file_path)
    canvas.save(os.path.join(OUTPUT_DIR, filename), "PNG")
    print(f"Processed: {filename} ({cw}x{ch}) -> ({target_w}x{target_h}) in ({CANVAS_W}x{CANVAS_H})")

def main():
    files = glob.glob(os.path.join(BRANDS_DIR, "*.png"))
    for f in sorted(files):
        process_logo(f)

if __name__ == "__main__":
    main()
