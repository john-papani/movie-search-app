"use client";
import Image from "next/image";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Searchbar from "./Components/Searchbar";
import { useState } from "react";
import Movies from "./Components/Movies";

export default function Home() {
  const [moviesData, setMoviesData] = useState({});
  const [loading, setLoading] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-start flex-1 text-center p-4 md:h-[80vh]">
        <Searchbar
          setMoviesData={setMoviesData}
          setLoading={setLoading}
          setInitialLoad={setInitialLoad}
        />
        {initialLoad && !loading && (
          <div className="mt-10 md:mt-0 flex flex-col items-center justify-center text-center text-gray-700 md:h-[calc(100vh-12rem)] px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              🎬 Welcome to <span className="text-red-500">Movie Search</span>
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl leading-relaxed">
              Discover your favorite movies and series instantly. Use the search
              bar above to get started!
            </p>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center h-[50vh] text-gray-600">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-solid mb-4"></div>
            <p className="text-xl font-medium">Loading movies...</p>
          </div>
        )}

        {!loading && <Movies moviesData={moviesData} />}
      </main>

      <Footer />
    </div>
  );
}
