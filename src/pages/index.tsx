/* eslint-disable react/jsx-key */
import PokemonCard from "@/components/PokemonCard";
import { usePokemonStore } from "global-stores/PokemonStore";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPokemon } from "types/Pokemon";

export interface Result {
  name: string;
  url: string;
}

export interface PokemonIDList {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
const Home: NextPage = () => {
  const { pokemon, next } = usePokemonStore((state) => ({
    pokemon: state.pokemon,
    next: state.next,
  }));

  const setPokemons = usePokemonStore((state) => state.setPokemons);

  const setNext = usePokemonStore((state) => state.setNext);

  async function fetchPokemon(): Promise<void> {
    if (next !== null) {
      const data: PokemonIDList = await fetch(next).then((response) =>
        response.json()
      );

      setNext(data.next);

      fetchPokemonDetails(data.results);
    }
  }

  function fetchPokemonDetails(data: Result[]): void {
    data.forEach(async (x: Result) => {
      const newPokemon: IPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${x.name}`,
        { cache: "force-cache" }
      ).then((response) => response.json());

      setPokemons(newPokemon);
    });
  }

  useEffect(() => {
    fetchPokemon();

    return () => {
      next;
      pokemon;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>Pokedéx</title>
        <meta name="description" content="Get information about all Pokemon" />
        <meta property="og:title" content="Pokedéx" key="Pokedéx" />
      </Head>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchPokemon}
        hasMore={!!next}
        loader={<h3></h3>}
        endMessage={<div></div>}
        className="flex flex-col items-center justify-center"
      >
        <div
          key={next}
          className="grid md:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-4 lg:p-16 p-10 xl:w-2/3 w-full"
        >
          {pokemon.map((data: IPokemon, idx: number) => (
            <PokemonCard
              key={idx}
              id={data.id}
              name={data.name}
              type={data.types}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
