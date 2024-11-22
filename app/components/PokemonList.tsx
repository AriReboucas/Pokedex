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
  const [hasMore, setHasMore] = useState<boolean>(true);
  const itemsPerPage = 21;

  const fetchPokemons = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const data = await getPokemons(page, itemsPerPage);
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setPokemons(data);
      }
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  const handleNextPage = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (!loading && page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
              key={pokemon.id}
              className={`${cardColor} p-4 rounded shadow hover:shadow-lg transition`}
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
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1 || loading}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
        >
          Anterior
        </button>
        <span className="text-sm font-medium">Página: {page}</span>
        <button
          onClick={handleNextPage}
          disabled={!hasMore || loading}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:bg-gray-200"
        >
          Próxima
        </button>
      </div>

      {loading && <div className="text-center py-4">Carregando...</div>}
    </div>
  );
};

export default PokemonList;
