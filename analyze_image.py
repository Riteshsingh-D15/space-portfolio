from PIL import Image

def analyze_horizontal_line(image_path):
    img = Image.open(image_path)
    img = img.convert('RGB')
    
    width, height = img.size
    
    # Check pixels along the middle horizontal line
    y = height // 2
    colors = []
    
    print("Sampling pixels across the middle:")
    for x in range(0, width, width//20):
        pixel = img.getpixel((x, y))
        hex_color = '#{:02x}{:02x}{:02x}'.format(pixel[0], pixel[1], pixel[2])
        colors.append(hex_color)
        print(f"x={x}: {hex_color}")
        
analyze_horizontal_line(r'C:/Users/Ritesh/.gemini/antigravity/brain/cb8815ee-3d2b-4c7b-84fa-fe3c19cddca0/.user_uploaded/media_1789983457770.png')
