import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (page, itemsPerPage) => {
  try {
    const offset = (page - 1) * itemsPerPage;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${itemsPerPage}`
    );
    const data = await response.json();

    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const detailsResponse = await fetch(pokemon.url);
        const details = await detailsResponse.json();

        return {
          id: details.id,
          name: details.name,
          types: details.types.map((type) => type.type.name),
          weight: details.weight,
          height: details.height,
          image: details.sprites.other["official-artwork"].front_default,
        };
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar Pokémon da API:", error);
    return [];
  }
};
