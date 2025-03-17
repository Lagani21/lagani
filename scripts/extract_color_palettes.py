# File: scripts/extract_color_palettes.py

import os
import json
import requests
import kagglehub
import pandas as pd
from colorthief import ColorThief
from PIL import Image
from tqdm import tqdm

# Step 1: Download both datasets from KaggleHub
poster_path = kagglehub.dataset_download("neha1703/movie-genre-from-its-poster")
tmdb_path = kagglehub.dataset_download("rounakbanik/the-movies-dataset")
print("Downloaded poster dataset to:", poster_path)
print("Downloaded TMDB dataset to:", tmdb_path)

# Step 2: Load Metadata
poster_df = pd.read_csv(os.path.join(poster_path, "MovieGenre.csv"), encoding="latin1")
credits_df = pd.read_csv(os.path.join(tmdb_path, "credits.csv"))
metadata_df = pd.read_csv(os.path.join(tmdb_path, "movies_metadata.csv"), low_memory=False)

# Normalize IMDb IDs
metadata_df = metadata_df[metadata_df['imdb_id'].notnull() & metadata_df['imdb_id'].str.startswith('tt')]
metadata_df['imdb_numeric'] = metadata_df['imdb_id'].str.extract(r'tt0*([0-9]+)').astype(str)

# Merge poster and metadata on imdbId
poster_df["imdbId"] = poster_df["imdbId"].astype(str)
merged_df = pd.merge(poster_df, metadata_df, left_on="imdbId", right_on="imdb_numeric", how="inner")

# Merge with credits to get director
credits_df['id'] = credits_df['id'].astype(str)
metadata_df['id'] = metadata_df['id'].astype(str)
merged_df['id'] = merged_df['id'].astype(str)
merged_df = pd.merge(merged_df, credits_df, on="id", how="left")

# Extract director from crew
import ast

def get_director(crew_json):
    try:
        crew = ast.literal_eval(crew_json)
        for person in crew:
            if person.get("job") == "Director":
                return person.get("name")
    except:
        pass
    return "Unknown"

merged_df["director"] = merged_df["crew"].apply(get_director)

# Paths
POSTER_FOLDER = "public/projects/color-palettes/raw_posters"
OUTPUT_JSON = "public/data/movie_palettes.json"
os.makedirs(POSTER_FOLDER, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

# Only keep necessary columns and limit
movies = merged_df[["Title", "Genre", "Poster", "director"]].dropna().head(10)
movies.columns = ["title", "genre", "poster_url", "director"]

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb

def extract_palette(image_path, num_colors=5):
    try:
        ct = ColorThief(image_path)
        palette = ct.get_palette(color_count=num_colors)
        return [rgb_to_hex(c) for c in palette]
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return []

def download_image(url, path):
    try:
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return True
        else:
            print(f"Failed to download: {url}")
            return False
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def main():
    result = []
    for _, row in tqdm(movies.iterrows(), total=len(movies)):
        safe_title = row["title"].replace(" ", "_").replace("/", "-")
        poster_path = os.path.join(POSTER_FOLDER, f"{safe_title}.jpg")

        if not os.path.exists(poster_path):
            success = download_image(row["poster_url"], poster_path)
            if not success:
                continue

        palette = extract_palette(poster_path)
        if palette:
            result.append({
                "title": row["title"],
                "genre": row["genre"],
                "director": row["director"],
                "palette": palette
            })

    with open(OUTPUT_JSON, "w") as f:
        json.dump(result, f, indent=2)
    print(f"✅ Extracted palettes saved to {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
