import cv2

def get_edge_color(video_path):
    cap = cv2.VideoCapture(video_path)
    ret, frame = cap.read()
    if not ret:
        print("Failed to read video")
        return
        
    height, width, _ = frame.shape
    
    # Check top-left corner
    top_left = frame[0, 0]
    # Check top-right
    top_right = frame[0, width-1]
    
    print(f"Top-left BGR: {top_left}")
    print(f"Top-right BGR: {top_right}")
    
    # Check center (in case it's a gradient)
    center = frame[height//2, width//2]
    print(f"Center BGR: {center}")
    
    # Convert BGR to Hex
    tl_hex = '#{:02x}{:02x}{:02x}'.format(top_left[2], top_left[1], top_left[0])
    print(f"Top-left Hex: {tl_hex}")
    
    cap.release()

get_edge_color('public/videos/ezgif-1cb804117939a4ef.webm')
get_edge_color('public/videos/ezgif-1b8352cf196aa760.webm')
