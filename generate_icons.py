from PIL import Image, ImageDraw

def create_pwa_icon(size: int, filename: str):
    # Base dark theme background matching --bg-color (#0f172a)
    bg_color = (15, 23, 42)
    accent_color = (56, 189, 248)       # --accent (#38bdf8)
    node_fill_color = (30, 41, 59)      # --node-bg (#1e293b)
    line_color = (100, 116, 139)        # --line-color (#64748b)

    img = Image.new("RGBA", (size, size), bg_color)
    draw = ImageDraw.Draw(img)

    # Proportional coordinate points
    cx = size / 2
    root_x, root_y = cx, size * 0.28
    left_x, left_y = size * 0.28, size * 0.72
    right_x, right_y = size * 0.72, size * 0.72

    # Dynamic line and node dimensions
    line_w = max(2, int(size * 0.025))
    root_r = int(size * 0.12)
    child_r = int(size * 0.09)

    # Connecting tree lines
    draw.line([(root_x, root_y), (left_x, left_y)], fill=line_color, width=line_w)
    draw.line([(root_x, root_y), (right_x, right_y)], fill=line_color, width=line_w)

    # Helper to draw centered circular nodes with accent borders
    def draw_node(x, y, r, border_color):
        bbox = [x - r, y - r, x + r, y + r]
        draw.ellipse(bbox, fill=node_fill_color, outline=border_color, width=max(2, int(size * 0.02)))

    # Child nodes
    draw_node(left_x, left_y, child_r, accent_color)
    draw_node(right_x, right_y, child_r, accent_color)

    # Root node (highlighted)
    draw_node(root_x, root_y, root_r, accent_color)

    # Save output
    img.save(filename, format="PNG")
    print(f"Generated: {filename} ({size}x{size})")

if __name__ == "__main__":
    create_pwa_icon(192, "icon-192.png")
    create_pwa_icon(512, "icon-512.png")
