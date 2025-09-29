import React, { useState } from "react";
import axios from "axios";

function MovieModal({ movieData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const icons = {
    movie: "🎬",
    series: "📺",
  };

  async function searchMovie() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?i=${movieData.imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
      );
      setMovieDetails(response.data);
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setIsOpen(false);
    setMovieDetails(null);
  }

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
          searchMovie();
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow"
      >
        See Details
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/70 backdrop-blur-sm overflow-auto p-4"
          onClick={closeModal}
        >
          <div
            className="bg-gray-900 text-white rounded-2xl shadow-2xl w-full max-w-3xl p-6 relative overflow-auto max-h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-700 pb-2 mb-4">
              <h3 className="text-xl sm:text-2xl font-bold mx-auto flex items-center gap-2">
                {movieDetails?.Title || "Loading..."} {icons[movieData.Type] || ""}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white text-lg font-bold absolute right-4 top-2"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            {loading ? (
              <div className="flex justify-center items-center p-10">
                <div className="w-12 h-12 border-4 border-gray-600 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              movieDetails && (
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Poster */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <img
                      src={
                        !movieData.Poster || movieData.Poster === "N/A"
                          ? "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                          : movieData.Poster
                      }
                      alt="Poster"
                      className="w-48 md:w-40 rounded-lg shadow-lg mb-2"
                    />
                    <p className="pt-2 text-gray-300 text-sm">
                      <strong>Released:</strong> {movieDetails.Released}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col gap-2 text-sm sm:text-base overflow-auto">
                    <p className="text-justify">{movieDetails.Plot}</p>
                    <p>
                      <strong>Actors:</strong> {movieDetails.Actors}
                    </p>
                    <p>
                      <strong>Runtime:</strong> {movieDetails.Runtime}
                    </p>
                    <p>
                      <strong>Genre:</strong> {movieDetails.Genre}
                    </p>
                    <p>
                      <strong>Language:</strong> {movieDetails.Language}
                    </p>
                    <p>
                      <strong>Country:</strong> {movieDetails.Country}
                    </p>
                    <p>
                      <strong>IMDb Rating:</strong> ⭐ {movieDetails.imdbRating}
                    </p>
                  </div>
                </div>
              )
            )}

            {/* IMDb Button */}
            {movieDetails && (
              <button
                onClick={() =>
                  window.open(
                    `https://www.imdb.com/title/${movieDetails.imdbID}`,
                    "_blank"
                  )
                }
                className="mt-4 sm:mt-6 mx-auto block bg-yellow-500 text-black px-5 py-2 rounded-lg font-medium hover:bg-yellow-600 hover:text-white transition-shadow shadow-md"
              >
                Visit IMDb Website
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieModal;
