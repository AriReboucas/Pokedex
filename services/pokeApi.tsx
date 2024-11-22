import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?imit=60&offset=0`);
    const pokemons = response.data.results;

    const pokemonsWithDetails = await Promise.all(
      pokemons.map(async (pokemon: { name: string; url: string }) => {
        const detailsResponse = await axios.get(pokemon.url);
        const pokemonDetails = detailsResponse.data;

        return {
          name: pokemonDetails.name,
          id: pokemonDetails.id,
          types: pokemonDetails.types.map(
            (type: { type: { name: string } }) => type.type.name
          ),
          weight: pokemonDetails.weight,
          height: pokemonDetails.height,
          image: pokemonDetails.sprites.front_default,
        };
      })
    );

    return pokemonsWithDetails;
  } catch (error) {
    console.error("Erro ao buscar os detalhes do Pokémon:", error);
    return [];
  }
};
