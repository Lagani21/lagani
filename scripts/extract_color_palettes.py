# File: scripts/extract_color_palettes.py

import os
import json
import requests
import kagglehub
import pandas as pd
from colorthief import ColorThief
from PIL import Image
from tqdm import tqdm
import colorsys
import ast

# Step 1: Download Datasets
print("Downloading datasets...")
neha_path = kagglehub.dataset_download("neha1703/movie-genre-from-its-poster")
tmdb_path = kagglehub.dataset_download("rounakbanik/the-movies-dataset")
print("✅ Downloaded datasets")

# Load Neha metadata
neha_csv = os.path.join(neha_path, "MovieGenre.csv")
df_neha = pd.read_csv(neha_csv, encoding="latin1")
df_neha = df_neha[["Title", "Genre", "Poster", "imdbId"]].dropna()
df_neha.columns = ["title", "genre", "poster_url", "imdbId"]
df_neha["imdbId"] = df_neha["imdbId"].astype(str)

# Load TMDB metadata for director info
credits_path = os.path.join(tmdb_path, "credits.csv")
credits_df = pd.read_csv(credits_path)
credits_df["id"] = credits_df["id"].astype(str)
df_neha["imdbId"] = df_neha["imdbId"].str.extract(r'(\d+)')

# Map imdbId to TMDB id via links.csv
links_path = os.path.join(tmdb_path, "links.csv")
links_df = pd.read_csv(links_path)
links_df["imdbId"] = links_df["imdbId"].astype(str)
links_df["tmdbId"] = links_df["tmdbId"].astype(str)
merged_links = pd.merge(df_neha, links_df, on="imdbId", how="left")

# Merge with credits.csv to get director
def get_director(crew):
    try:
        crew_list = ast.literal_eval(crew)
        for member in crew_list:
            if member.get("job") == "Director":
                return member.get("name")
    except:
        return "Unknown"

credits_df = credits_df[["id", "crew"]]
credits_df.columns = ["tmdbId", "crew"]
final_df = pd.merge(merged_links, credits_df, on="tmdbId", how="left")
final_df["director"] = final_df["crew"].apply(get_director)
final_df = final_df.drop(columns=["crew"])

# Limit for testing
movies = final_df.dropna(subset=["poster_url"]).head(30)

# Paths
POSTER_FOLDER = "public/projects/color-palettes/raw_posters"
OUTPUT_JSON = "public/data/movie_palettes.json"
os.makedirs(POSTER_FOLDER, exist_ok=True)
os.makedirs(os.path.dirname(OUTPUT_JSON), exist_ok=True)

def rgb_to_hex(rgb):
    return '#%02x%02x%02x' % rgb

def rgb_to_hsl(rgb):
    r, g, b = [x / 255.0 for x in rgb]
    h, l, s = colorsys.rgb_to_hls(r, g, b)
    return {
        "hue": round(h * 360, 1),
        "lightness": round(l * 100, 1),
        "saturation": round(s * 100, 1)
    }

def get_tone(hue):
    if hue < 50 or hue > 300:
        return "warm"
    elif 180 <= hue <= 300:
        return "cool"
    else:
        return "neutral"

def extract_palette_with_metrics(image_path, num_colors=5):
    try:
        ct = ColorThief(image_path)
        palette = ct.get_palette(color_count=num_colors)
        hex_colors = [rgb_to_hex(c) for c in palette]
        hsl_data = [rgb_to_hsl(c) for c in palette]

        avg_lightness = sum(c["lightness"] for c in hsl_data) / len(hsl_data)
        avg_saturation = sum(c["saturation"] for c in hsl_data) / len(hsl_data)
        avg_hue = sum(c["hue"] for c in hsl_data) / len(hsl_data)
        tone = get_tone(avg_hue)

        return {
            "palette": hex_colors,
            "avg_lightness": round(avg_lightness, 2),
            "avg_saturation": round(avg_saturation, 2),
            "avg_hue": round(avg_hue, 2),
            "tone": tone
        }
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return None

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
                print(f"❌ Failed to download poster for: {row['title']}")
                continue

        palette_data = extract_palette_with_metrics(poster_path)
        if not palette_data:
            print(f"⚠️ Could not extract palette for: {row['title']}")
            continue

        result.append({
            "title": row["title"],
            "genre": row["genre"],
            "director": row["director"],
            "imdbId": row["imdbId"],
            **palette_data
        })

    with open(OUTPUT_JSON, "w") as f:
        json.dump(result, f, indent=2)
    print(f"✅ Extracted palettes with metrics saved to {OUTPUT_JSON}")

if __name__ == "__main__":
    main()