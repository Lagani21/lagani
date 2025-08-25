"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ColorStripe from "@/components/ColorStripe";

// Dynamic imports to prevent SSR issues with Plotly.js
const DirectorPalette = dynamic(() => import("@/components/DirectorPalette"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
});

const GenreMap = dynamic(() => import("@/components/GenreMap"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
});

const TopGenrePalettes = dynamic(() => import("@/components/TopGenrePalettes"), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
});

export default function ColorPalettesProject() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("/data/movie_palettes.json");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setMovieData(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching movie data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="p-4 max-w-5xl mx-auto text-white">
        <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 max-w-5xl mx-auto text-white">
        <div className="bg-red-900/20 border border-red-500 rounded-lg p-4">
          <p className="text-red-400">Error loading data: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6 text-[#2081C3]">🎬 Cinematic Color Palettes</h1>
      <p className="mb-8 text-lg text-gray-300">
        Explore the visual signatures of movies through their dominant poster colors.
      </p>
  
      {/* Movie Color Stripes */}
      {movieData.map((movie, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            {movie.title} <span className="text-sm text-gray-400">({movie.genre})</span>
          </h2>
          <ColorStripe palette={movie.palette} />
        </div>
      ))}
  
      {/* 🎨 Director Palette Fingerprint */}
      <div className="mt-16">
        <DirectorPalette />
        <GenreMap />
        <TopGenrePalettes />
      </div>
    </div>
  );  
}
