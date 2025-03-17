// File: src/components/TopGenrePalettes.js
"use client";

import { useEffect, useState } from "react";

export default function TopGenrePalettes() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data/genre_palette_frequency.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const genres = Object.keys(data);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-[#2081C3] mb-6">🎨 Top Genre Color Palettes</h2>

      {genres.map((genre) => (
        <div key={genre} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{genre}</h3>
          <div className="flex h-10 w-full overflow-hidden rounded-lg shadow-sm border border-white/10">
            {data[genre].map((color, idx) => (
              <div
                key={idx}
                className="flex-1"
                title={color}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}