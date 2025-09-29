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
      className="flex flex-col md:flex-row items-center gap-3 w-full max-w-xl mx-auto p-4 bg-gray-800 rounded-xl shadow-lg"
    >
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg border border-gray-700 bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Search
      </button>

      {/* Toggle Filter Buttons */}
      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
        {[
          { label: "All", value: "" },
          { label: "Movies 🎬", value: "movie" },
          { label: "Series 📺", value: "series" },
        ].map((item) => (
          <button
            key={item.value || "all"}
            type="button"
            onClick={() => setType(item.value)}
            className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
              type === item.value
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-700 text-gray-200 hover:bg-gray-600"
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
