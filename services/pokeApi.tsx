import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

/**
 * Função para buscar a lista de Pokémons com paginação
 * @param {number} page - Página atual
 * @param {number} itemsPerPage - Quantidade de itens por página
 * @returns {Promise<Array>} - Lista de Pokémons formatados
 */
export const getPokemons = async (page, itemsPerPage = 21) => {
  try {
    const offset = (page - 1) * itemsPerPage;
    const response = await axios.get(
      `${BASE_URL}?offset=${offset}&limit=${itemsPerPage}`
    );
    const { results } = response.data;

    const pokemons = await Promise.all(
      results.map(async (pokemon) => {
        const detailsResponse = await axios.get(pokemon.url);
        const details = detailsResponse.data;

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
    console.error("Erro ao buscar Pokémons da API:", error);
    return [];
  }
};

/**
 * Função para buscar um Pokémon pelo nome
 * @param {string} name - Nome do Pokémon
 * @returns {Promise<Object|null>} - Detalhes do Pokémon ou null se não encontrado
 */
export const searchPokemonByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}/${name.toLowerCase()}`);
    const details = response.data;

    return {
      id: details.id,
      name: details.name,
      types: details.types.map((type) => type.type.name),
      weight: details.weight,
      height: details.height,
      image: details.sprites.other["official-artwork"].front_default,
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn(`Pokémon "${name}" não encontrado.`);
    } else {
      console.error("Erro ao buscar Pokémon por nome:", error);
    }
    return null;
  }
};
