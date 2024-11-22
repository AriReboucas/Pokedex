"use client";

import React, { useEffect, useState, useCallback } from "react";
import { getPokemons } from "@/services/pokeApi";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

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
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(21);

  const fetchPokemons = useCallback(
    async (page: number) => {
      setLoading(true);
      try {
        const data = await getPokemons(page, itemsPerPage);
        setPokemons((prev) => [...prev, ...data]);
        setFilteredPokemons((prev) => [...prev, ...data]);
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
      } finally {
        setLoading(false);
      }
    },
    [itemsPerPage]
  );

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage, fetchPokemons]);

  const handleSearch = (query: string) => {
    if (!query) {
      setFilteredPokemons(pokemons);
    } else {
      const filtered = pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredPokemons(filtered);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />

      {loading && currentPage === 1 ? (
        <div>Carregando...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
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
          ))}
        </div>
      )}

      {!loading && filteredPokemons.length > 0 && (
        <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
      )}

      {loading && currentPage > 1 && (
        <div className="text-center py-4">Carregando mais...</div>
      )}
    </div>
  );
};

export default PokemonList;
