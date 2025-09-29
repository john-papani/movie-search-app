import React from "react";
import Moviecard from "./Moviecard";
function Movies({ moviesData }) {
  return (
    <div className="flex flex-row flex-wrap justify-center w-full md:w-[85vw] h-fit mx-auto md:h-[75vh] overflow-y-auto mt-4 md:gap-4">
      {moviesData &&
        moviesData.Search &&
        moviesData.Search.map((movie) => (
          <Moviecard key={movie.imdbID} movieData={movie} />
        ))}
      {moviesData && moviesData.Response === "False" && (
        <p>{moviesData.Error}</p>
      )}
    </div>
  );
}

export default Movies;
