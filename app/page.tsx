import Head from "next/head";

import PokemonList from "./components/PokemonList";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Pokedex</h1>
        <PokemonList />
      </main>
    </div>
  );
}
