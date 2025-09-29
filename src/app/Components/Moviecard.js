import React from "react";
import MovieModal from "./MovieModal";

function MovieCard({ movieData }) {
  const icons = {
    movie: "🎬",
    series: "📺",
  };

  const poster =
    !movieData.Poster || movieData.Poster === "N/A" || movieData.Poster === "Not Found"
      ? "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
      : movieData.Poster;

  return (
    <div className="bg-gray-800 text-white rounded-2xl shadow-lg p-4 flex flex-col items-center justify-between transition-transform duration-300 w-[45%] md:w-1/5 m-[2%] md:m-4">
      {/* Poster */}
      <img
        src={poster}
        alt={movieData.Title}
        className="w-48 h-64 object-cover rounded-lg mb-4 shadow-md"
      />

      {/* Title & Info */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold">{movieData.Title}</h3>
        <p className="text-sm text-gray-300 flex items-center justify-center gap-1">
          {icons[movieData.Type]} {movieData.Year}
        </p>
      </div>

      {/* Modal Button */}
      <MovieModal movieData={movieData} />
    </div>
  );
}

export default MovieCard;
