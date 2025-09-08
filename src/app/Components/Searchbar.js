"use client";
import axios from "axios";
import React, { useState } from "react";

function Searchbar({ setMoviesData, setLoading }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState(""); // filter type: "", "movie", "series", "episode"

  const handleSubmit = () => {
    const cleanedQuery = query.trim();
    if (!cleanedQuery) return;

    async function fetchMovies() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${cleanedQuery}&type=${type}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
        );
        setMoviesData(response.data);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col md:flex-row items-center gap-2"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full md:w-64"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded w-full md:w-auto"
      >
        Search
      </button>

      {/* Toggle Filter Buttons */}
      <div className="flex gap-2">
        {[
          { label: "All", value: "" },
          { label: "Movies 🎬", value: "movie" },
          { label: "Series 📺", value: "series" },
        ].map((item) => (
          <button
            key={item.value || "all"}
            type="button"
            onClick={() => setType(item.value)}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              type === item.value
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </form>
  );
}

export default Searchbar;
