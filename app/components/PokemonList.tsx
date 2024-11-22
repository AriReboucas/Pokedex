"use client";

import React, { useEffect, useState, useCallback } from "react";
import { getPokemons } from "@/services/pokeApi";

interface Pokemon {
  name: string;
  id: number;
  types: string[];
  weight: number;
  height: number;
  image: string;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const fetchPokemons = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await getPokemons(page);
      setPokemons((prevPokemons) => [...prevPokemons, ...data]);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      setLoading(false);
    }
  }, [loading, page]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons, page]);

  const handleScroll = () => {
    const bottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (bottom && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  if (loading && page === 1) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {pokemons.map((pokemon) => {
        const cardColor = pokemon.types.includes("fire")
          ? "bg-red-300"
          : pokemon.types.includes("water")
          ? "bg-blue-300"
          : pokemon.types.includes("grass")
          ? "bg-green-300"
          : "bg-gray-300";

        return (
          <div
            key={`${pokemon.id}-${page}`}
            className="bg-gray-200 p-4 rounded shadow hover:shadow-lg transition"
          >
            <div className="text-center">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="mx-auto my-4 w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
              <h3 className="text-xl font-bold capitalize">{pokemon.name}</h3>
              <p className="text-sm text-gray-700">ID: {pokemon.id}</p>
            </div>

            <div className="mt-4">
              <p className="text-sm">Tipos: {pokemon.types.join(", ")}</p>
              <p className="text-sm">Peso: {pokemon.weight / 10} kg</p>
              <p className="text-sm">Altura: {pokemon.height / 10} m</p>
            </div>
          </div>
        );
      })}

      {loading && <div className="text-center py-4">Carregando mais...</div>}
    </div>
  );
};

export default PokemonList;
