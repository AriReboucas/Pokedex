"use client";

import React, { useState, useEffect } from "react";
import { getPokemons } from "@/services/pokeApi";
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [totalPokemons, setTotalPokemons] = useState(0);

  const loadPokemons = async (page: number, search?: string) => {
    setLoading(true);
    const itemsPerPage = 21;
    try {
      let fetchedPokemons;

      if (search) {
        fetchedPokemons = await getPokemonsByName(search);
        setTotalPokemons(fetchedPokemons.length);
      } else {
        fetchedPokemons = await getPokemons(page, itemsPerPage);
        setTotalPokemons(1118);
      }

      setPokemons(fetchedPokemons);
    } catch (error) {
      console.error("Erro ao carregar Pokémons:", error);
    } finally {
      setLoading(false);
    }
  };

  const getPokemonsByName = async (name: string) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      const data = await response.json();

      return [
        {
          id: data.id,
          name: data.name,
          types: data.types.map((type: any) => type.type.name),
          weight: data.weight,
          height: data.height,
          image: data.sprites.other["official-artwork"].front_default,
        },
      ];
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      return [];
    }
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
    loadPokemons(1, query);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    loadPokemons(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    loadPokemons(newPage, searchTerm);
  };

  useEffect(() => {
    loadPokemons(1);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <SearchBar onSearch={handleSearch} onClear={handleClearSearch} />

      <div className="grid grid-cols-3 gap-4">
        {loading ? (
          <div>Carregando...</div>
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))
        )}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 rounded-l"
        >
          Anterior
        </button>
        <span className="px-4 py-2 bg-gray-100">Página {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page * 21 >= totalPokemons}
          className="px-4 py-2 bg-gray-300 rounded-r"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default App;
