"use client";

import Head from "next/head";
import { useState, useEffect } from "react";

import PokemonList from "./components/PokemonList";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Head>
        <title>Pokémon</title>
      </Head>

      <main className="container mx-auto p-4">
        {/* Botão para alternar o tema */}
        <button
          className="absolute top-4 right-4 p-2 rounded-full"
          onClick={toggleTheme}
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">Pokedex</h1>
        <PokemonList />
      </main>
    </div>
  );
}
