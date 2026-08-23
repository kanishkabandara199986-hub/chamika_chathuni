from PIL import Image
import os

input_path = r"G:\Projects\Chamika and chathuni\public\assets\images\couple_art.png"
output_path = r"G:\Projects\Chamika and chathuni\public\assets\images\og_image.jpg"

try:
    with Image.open(input_path) as img:
        # Convert to RGB if it's RGBA
        if img.mode == 'RGBA':
            bg = Image.new("RGB", img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[3])
            img = bg
            
        # Resize to 1200x630 (standard OG image size) while preserving aspect ratio, cropping the rest
        target_width = 1200
        target_height = 630
        
        # Calculate aspect ratios
        img_ratio = img.width / img.height
        target_ratio = target_width / target_height
        
        if img_ratio > target_ratio:
            # Image is wider than target
            new_width = int(img.height * target_ratio)
            left = (img.width - new_width) / 2
            top = 0
            right = (img.width + new_width) / 2
            bottom = img.height
            img = img.crop((left, top, right, bottom))
        elif img_ratio < target_ratio:
            # Image is taller than target
            new_height = int(img.width / target_ratio)
            left = 0
            top = (img.height - new_height) / 2
            right = img.width
            bottom = (img.height + new_height) / 2
            img = img.crop((left, top, right, bottom))
            
        img = img.resize((target_width, target_height), Image.Resampling.LANCZOS)
        
        # Save as JPG with quality 85 (should be well under 300KB)
        img.save(output_path, "JPEG", quality=85)
        print(f"Saved {output_path} with size {os.path.getsize(output_path)/1024:.2f} KB")
except Exception as e:
    print(f"Error: {e}")
