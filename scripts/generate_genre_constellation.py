# File: scripts/generate_genre_constellation.py

import os
import json
import numpy as np
import pandas as pd
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

# Paths
INPUT_JSON = "public/data/movie_palettes.json"
OUTPUT_JSON = "public/data/genre_constellation.json"

# Load data
with open(INPUT_JSON, "r") as f:
    movies = json.load(f)

# Build color vectors from top 5 hex colors (each as RGB)
def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    return [int(hex_color[i:i+2], 16) for i in (0, 2, 4)]

rows = []
for movie in movies:
    palette = movie.get("palette", [])[:5]
    if len(palette) < 5:
        continue

    rgb_vector = []
    for hex_color in palette:
        rgb_vector.extend(hex_to_rgb(hex_color))

    rows.append({
        "title": movie["title"],
        "genre": movie["genre"].split("|")[0],  # use first genre only
        "color": palette[0],  # most dominant
        "vector": rgb_vector
    })

# Create DataFrame
vector_df = pd.DataFrame(rows)
X = np.stack(vector_df["vector"].values)
X_scaled = StandardScaler().fit_transform(X)

# Apply PCA to reduce to 2D
pca = PCA(n_components=2)
coords = pca.fit_transform(X_scaled)

vector_df["x"] = coords[:, 0]
vector_df["y"] = coords[:, 1]

# Build output format
output = []
for _, row in vector_df.iterrows():
    output.append({
        "title": row["title"],
        "genre": row["genre"],
        "x": row["x"],
        "y": row["y"],
        "color": row["color"]
    })

# Save to JSON
with open(OUTPUT_JSON, "w") as f:
    json.dump(output, f, indent=2)

print(f"✅ Saved genre constellation data to {OUTPUT_JSON}")