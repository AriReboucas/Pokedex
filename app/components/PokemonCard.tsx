import React from "react";

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    weight: number;
    height: number;
    image: string;
  };
}

const typeColors: { [key: string]: string } = {
  normal: "#a4acaf",
  fighting: "#d56723",
  flying: "#7ecdf7",
  poison: "#6f55af",
  ground: "#906727",
  rock: "#a38c21",
  bug: "#729f3f",
  ghost: "#7b62a3",
  steel: "#9eb7b8",
  fire: "#fd7d24",
  water: "#4592c4",
  grass: "#9bcc50",
  electric: "#eed535",
  psychic: "#f355b9",
  ice: "#51c4e7",
  dragon: "#fc801e",
  dark: "#707070",
  fairy: "#fdb9e9",
  unknown: "#666666",
  shadow: "#3b3b3b",
};

const PokemonCard: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div
      className="relative flex flex-col justify-between rounded-xl px-4 py-4 shadow-lg transition-transform hover:scale-105"
      style={{
        backgroundColor: typeColors[pokemon.types[0]] || "#ccc",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-bold capitalize">
          {pokemon.name}
        </h2>
        <p className="text-white text-lg font-semibold">#{pokemon.id}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="text-white text-sm font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: typeColors[type] || "#666",
            }}
          >
            {type}
          </span>
        ))}
      </div>

      <div className="flex justify-between text-white text-sm">
        <div>
          <p className="font-semibold">Altura</p>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div>
          <p className="font-semibold">Peso</p>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>

      <div className="absolute right-2 bottom-2 w-24 h-24">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default PokemonCard;
