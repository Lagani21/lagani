# File: scripts/generate_director_palettes.py

import os
import json
from collections import Counter

# Input and output paths
INPUT_JSON = "public/data/movie_palettes.json"
OUTPUT_JSON = "public/data/director_palettes.json"

# Load the movie palette data with directors
def load_data():
    with open(INPUT_JSON, "r") as f:
        return json.load(f)

# Aggregate top colors used by each director
def build_director_palette(data, top_n=10):
    director_colors = {}

    for movie in data:
        director = movie.get("director", "Unknown")
        palette = movie.get("palette", [])

        if director not in director_colors:
            director_colors[director] = []

        director_colors[director].extend(palette)

    director_palettes = {}
    for director, colors in director_colors.items():
        top_colors = [color for color, _ in Counter(colors).most_common(top_n)]
        director_palettes[director] = top_colors

    return director_palettes

# Save aggregated director palette JSON
def save_json(data):
    with open(OUTPUT_JSON, "w") as f:
        json.dump(data, f, indent=2)
    print(f"✅ Saved director palettes to {OUTPUT_JSON}")

def main():
    data = load_data()
    director_palette = build_director_palette(data)
    save_json(director_palette)

if __name__ == "__main__":
    main()
