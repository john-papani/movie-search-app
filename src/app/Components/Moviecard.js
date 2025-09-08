import React from "react";
import MovieModal from "./MovieModal";

function Moviecard({ movieData }) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const icons = {
    movie: "🎬",
    series: "📺",
  };

  return (
    <div className="border-2 border-gray-300 p-4 m-4 rounded-lg w-1/5 shadow-lg flex flex-col items-center justify-between">
      <div className="flex flex-row items-center justify-around w-full">
        {movieData.Poster === "N/A" ||
        !movieData.Poster ||
        movieData.Poster === "Not Found" ? (
          <img
            src={`https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg`}
            alt="Placeholder Poster"
            className="w-24 h-36 mb-2 object-cover"
          />
        ) : (
          <img
            src={movieData.Poster}
            alt="Movie Poster"
            className="w-24 h-36 mb-2 object-cover"
          />
        )}
        <div className="text-center">
          <p className="font-semibold italic">{movieData.Title} {icons[movieData.Type]}</p>
          <p>{movieData.Year}</p>
          {/* <p>{icons[movieData.Type]}</p> */}
        </div>
      </div>

      <MovieModal movieData={movieData} />
    </div>
  );
}

export default Moviecard;
