import React from "react";
import Moviecard from "./Moviecard";
import ErrorCard from "./ErrorCard";

function Movies({ moviesData }) {
  const uniqueMovies = moviesData?.Search
    ? Array.from(new Map(moviesData.Search.map((m) => [m.imdbID, m])).values())
    : [];

  return (
    <div className="flex flex-row flex-wrap justify-center w-full md:w-[85vw] h-fit mx-auto md:h-[80vh] overflow-y-auto mt-4 md:gap-4">
      {uniqueMovies.length > 0 &&
        uniqueMovies.map((movie) => (
          <Moviecard key={movie.imdbID} movieData={movie} />
        ))}
      {moviesData && moviesData.Response === "False" && (
        <ErrorCard message={moviesData.Error} />
      )}
    </div>
  );
}

export default Movies;
