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
      className="relative w-96 h-56 flex flex-col justify-between rounded-xl px-6 py-4"
      style={{
        backgroundColor: typeColors[pokemon.types[0]] || "#ccc",
      }}
    >
      <div className="flex justify-center items-center gap-4 mb-3">
        <h2 className="text-white text-3xl font-bold capitalize mr-2">
          {pokemon.name}
        </h2>
        <p className="text-white text-2xl font-bold">#{pokemon.id}</p>
      </div>

      <div className="flex justify-start gap-2 my-3">
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

      <div className="flex justify-start gap-6 mt-3">
        <div className="text-white text-base">
          <p className="font-semibold">Height</p>
          <p>{pokemon.height / 10} m</p>
        </div>
        <div className="text-white text-base">
          <p className="font-semibold">Weight</p>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>

      <div className="absolute right-2 bottom-2 w-36 h-36">
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
