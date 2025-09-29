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

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex flex-col items-center justify-start flex-1 text-center p-4 md:h-[80vh]">
        <Searchbar setMoviesData={setMoviesData} setLoading={setLoading} />
        {loading && <p>Loading...</p>}
        {!loading && <Movies moviesData={moviesData} />}
      </main>

      <Footer />
    </div>
  );
}
