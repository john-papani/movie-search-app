import React from "react";

const Header = () => (
  <header className="sticky top-0 z-50 bg-gray-900 shadow-md py-3">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
      <h1 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
        🎬 Movie Search App
      </h1>
      <p className="text-gray-300 text-sm md:text-base mt-2 md:mt-0">
        Discover movies, series & episodes instantly
      </p>
    </div>
  </header>
);

export default Header;
