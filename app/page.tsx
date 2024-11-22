"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

import PokemonList from "./components/PokemonList";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Head>
        <title>Pokémon</title>
      </Head>

      <main className="container mx-auto p-4">
        <button
          className="absolute top-4 right-4 p-2 rounded-full"
          onClick={toggleTheme}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">Pokémon</h1>
        <PokemonList />
      </main>
    </div>
  );
}
