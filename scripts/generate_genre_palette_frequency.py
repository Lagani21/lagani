# File: scripts/generate_genre_palette_frequency.py

import os
import json
from collections import defaultdict, Counter

# Paths
INPUT_JSON = "public/data/movie_palettes.json"
OUTPUT_JSON = "public/data/genre_palette_frequency.json"

# Load data
with open(INPUT_JSON, "r") as f:
    movies = json.load(f)

# Aggregate color frequency by genre
genre_colors = defaultdict(list)

for movie in movies:
    genre = movie.get("genre", "Unknown").split("|")[0]  # Use first genre only
    palette = movie.get("palette", [])
    genre_colors[genre].extend(palette)

# Count most common colors per genre
genre_palette = {}
TOP_N = 10

for genre, colors in genre_colors.items():
    counts = Counter(colors)
    top_colors = [color for color, _ in counts.most_common(TOP_N)]
    genre_palette[genre] = top_colors

# Save to JSON
with open(OUTPUT_JSON, "w") as f:
    json.dump(genre_palette, f, indent=2)

print(f"✅ Saved genre palette frequency to {OUTPUT_JSON}")
