// File: src/components/GenreMap.js
"use client";

import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

export default function GenreMap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/genre_constellation.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data.length) return <p className="text-gray-400">Loading genre map...</p>;

  const genres = [...new Set(data.map((d) => d.genre))];

  const plotData = genres.map((genre) => {
    const points = data.filter((d) => d.genre === genre);
    return {
      x: points.map((p) => p.x),
      y: points.map((p) => p.y),
      text: points.map((p) => `${p.title} (${p.genre})`),
      mode: "markers",
      type: "scatter",
      name: genre,
      marker: {
        size: 12,
        color: points.map((p) => p.color),
        line: { width: 1, color: "#fff" },
      },
    };
  });

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-[#2081C3] mb-4">🌌 Genre Palette Constellation</h2>
      <Plot
        data={plotData}
        layout={{
          title: "Movie Poster Color Clusters by Genre",
          paper_bgcolor: "#0f172a",
          plot_bgcolor: "#0f172a",
          font: { color: "#fff" },
          xaxis: { showgrid: false, zeroline: false },
          yaxis: { showgrid: false, zeroline: false },
          legend: { orientation: "h", y: -0.2 },
          margin: { t: 50, b: 50, l: 30, r: 30 },
        }}
        config={{ responsive: true }}
        style={{ width: "100%", height: "500px" }}
      />
    </div>
  );
}
