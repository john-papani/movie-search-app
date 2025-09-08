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
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center"
      >
        See details
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900/70"
          onClick={closeModal} // click outside closes modal
        >
          <div
            className="bg-white rounded-xl shadow-lg w-full max-w-3xl relative"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-xl font-semibold mx-auto italic">
                {movieDetails?.Title} {icons[movieData.Type] || "Loading..."}
              </h3>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            {loading ? (
              <div className="flex justify-center items-center p-10">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
              </div>
            ) : (
              movieDetails && (
                <div className="p-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Poster */}
                    <div className="flex flex-col">
                      {movieData.Poster === "N/A" ||
                      !movieData.Poster ||
                      movieData.Poster === "Not Found" ? (
                        <img
                          src={`https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg`}
                          alt="Placeholder Poster"
                          className="w-3/4 h-auto rounded-lg shadow"
                        />
                      ) : (
                        <img
                          src={movieData.Poster}
                          alt="Movie Poster"
                          className="w-full h-auto rounded-lg shadow"
                        />
                      )}

                      <p className="pt-2">
                        <strong>Released:</strong> {movieDetails.Released}
                      </p>
                    </div>
                    {/* Details */}
                    <div className="flex flex-col flex-1 space-y-2 text-sm md:text-base justify-between">
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
                        <strong>IMDb Rating:</strong> ⭐{" "}
                        {movieDetails.imdbRating}
                      </p>
                    </div>
                  </div>

                  {/* IMDb Button */}
                  <button
                    onClick={() =>
                      window.open(
                        `https://www.imdb.com/title/${movieDetails.imdbID}`,
                        "_blank"
                      )
                    }
                    className="mt-6 mx-auto block text-black bg-[#DEB522] hover:bg-[#0c0b00] hover:text-white transition-colors duration-300 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Visit IMDb Website
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieModal;
