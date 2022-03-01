/* eslint-disable react/jsx-key */
import { usePokemonStore } from "global-stores/PokemonStore";
import type { GetServerSideProps, NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { IPokemon } from "types/Pokemon";
import shallow from "zustand/shallow";

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
    if (next.length !== 0) {
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
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {pokemon.map((data: any, idx: number) => (
          <div key={idx}>
            <div className="back">
              <strong> {data.name}</strong>
            </div>
            {data.completed}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Home;
