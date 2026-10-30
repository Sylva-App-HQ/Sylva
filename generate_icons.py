import struct
import zlib

def create_pwa_icon(size: int, filename: str):
    # Base dark theme background matching --bg-color (#0f172a)
    bg_color = (15, 23, 42)
    accent_color = (56, 189, 248)       # --accent (#38bdf8)
    node_fill_color = (30, 41, 59)      # --node-bg (#1e293b)
    line_color = (100, 116, 139)        # --line-color (#64748b)

    pixels = [[bg_color + (255,) for _ in range(size)] for _ in range(size)]

    def set_pixel(x, y, color):
        if 0 <= x < size and 0 <= y < size:
            pixels[y][x] = color + (255,)

    def draw_line(x0, y0, x1, y1, color, width):
        x0, y0, x1, y1 = map(round, (x0, y0, x1, y1))
        dx, dy = abs(x1 - x0), abs(y1 - y0)
        sx = 1 if x0 < x1 else -1
        sy = 1 if y0 < y1 else -1
        error = dx - dy
        radius = max(0, width // 2)
        while True:
            for oy in range(-radius, radius + 1):
                for ox in range(-radius, radius + 1):
                    if ox * ox + oy * oy <= radius * radius + radius:
                        set_pixel(x0 + ox, y0 + oy, color)
            if x0 == x1 and y0 == y1:
                break
            twice_error = 2 * error
            if twice_error > -dy:
                error -= dy
                x0 += sx
            if twice_error < dx:
                error += dx
                y0 += sy

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
    draw_line(root_x, root_y, left_x, left_y, line_color, line_w)
    draw_line(root_x, root_y, right_x, right_y, line_color, line_w)

    # Helper to draw centered circular nodes with accent borders
    def draw_node(x, y, r):
        border = max(1, line_w)
        for py in range(round(y - r), round(y + r) + 1):
            for px in range(round(x - r), round(x + r) + 1):
                distance = (px - x) ** 2 + (py - y) ** 2
                if distance <= r * r:
                    color = accent_color if distance >= (r - border) ** 2 else node_fill_color
                    set_pixel(px, py, color)

    # Draw the nodes
    draw_node(left_x, left_y, child_r)
    draw_node(right_x, right_y, child_r)
    draw_node(root_x, root_y, root_r)

    # Save the file
    raw = b"".join(
        b"\x00" + b"".join(bytes(pixel) for pixel in row)
        for row in pixels
    )

    def png_chunk(chunk_type, data):
        chunk = chunk_type + data
        return (struct.pack(">I", len(data)) + chunk
                + struct.pack(">I", zlib.crc32(chunk) & 0xFFFFFFFF))

    png = (b"\x89PNG\r\n\x1a\n"
           + png_chunk(b"IHDR", struct.pack(">2I5B", size, size, 8, 6, 0, 0, 0))
           + png_chunk(b"IDAT", zlib.compress(raw))
           + png_chunk(b"IEND", b""))
    with open(filename, "wb") as image_file:
        image_file.write(png)
    print(f"Generated {filename}")

if __name__ == "__main__":
    create_pwa_icon(192, "icon-192.png")
    create_pwa_icon(512, "icon-512.png")
    create_pwa_icon(64, "favicon.png")