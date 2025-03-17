"use client";

import { useEffect, useState } from "react";
import ColorStripe from "@/components/ColorStripe";
import DirectorPalette from "@/components/DirectorPalette";
import GenreMap from "@/components/GenreMap";
import TopGenrePalettes from "@/components/TopGenrePalettes";



export default function ColorPalettesProject() {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    fetch("/data/movie_palettes.json")
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, []);

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
