/* eslint-disable react/jsx-key */
import PokemonCard from "@/components/PokemonCard";
import { usePokemonStore } from "global-stores/PokemonStore";
import type { NextPage } from "next";
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
        `https://pokeapi.co/api/v2/pokemon/${x.name}`
      ).then((response) => response.json());

      setPokemons(newPokemon);
      pokemon.sort((a, b) => a.id - b.id);
    });
  }

  useEffect(() => {
    fetchPokemon();

    return () => {
      next;
      pokemon;
    };
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchPokemon}
        hasMore={!!next}
        loader={<h3></h3>}
        endMessage={<div></div>}
        className="flex flex-col items-center justify-center"
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-4 p-16 xl:w-2/3 w-full">
          {pokemon.map((data: IPokemon, idx: number) => (
            <PokemonCard
              key={idx}
              id={data.id}
              name={data.name}
              image={data.sprites.other.dream_world.front_default}
              type={data.types}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Home;
