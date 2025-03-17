"use client";

import { useEffect, useState } from "react";

export default function DirectorPalette() {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("/data/director_palettes.json")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setSelected(Object.keys(d)[0]); // Set default director
      });
  }, []);

  const directors = Object.keys(data);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#2081C3] mb-4">
        🎬 Director Palette Fingerprint
      </h2>

      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="mb-6 px-3 py-2 rounded text-black"
      >
        {directors.map((dir) => (
          <option key={dir} value={dir}>
            {dir}
          </option>
        ))}
      </select>

      {selected && data[selected] && (
        <div className="flex h-12 w-full overflow-hidden rounded-lg shadow-md border border-white/20">
          {data[selected].map((color, idx) => (
            <div
              key={idx}
              className="flex-1 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      )}
    </div>
  );
}
