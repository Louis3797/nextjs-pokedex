/* eslint-disable react/jsx-key */
import { PokemonDetailsCard } from "@/components/PokemonDetailsCard";
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { IPokemon } from "types/Pokemon";
import { IPokemonSpecies } from "types/PokemonSpecies";
import { capitalizeFirstLetter } from "utils/capatilize";

interface PokemonPageProps {
  pokemonData: IPokemon;
  pokemonSpeciesData: IPokemonSpecies;
}
const Pokemon: NextPage<PokemonPageProps> = ({
  pokemonData,
  pokemonSpeciesData,
}) => {
  const setPokemon = usePokemonDetailStore((state) => state.setPokemon);
  const setSpecies = usePokemonDetailStore((state) => state.setSpecies);

  setPokemon(pokemonData);
  setSpecies(pokemonSpeciesData);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Head>
        <title>{capitalizeFirstLetter(pokemonData.name)}</title>
        <meta
          name="description"
          content={`Stats from ${pokemonData.name}`}
        ></meta>
        <meta
          property="og:title"
          content={pokemonData.name}
          key={pokemonData.name}
        />
      </Head>
      <PokemonDetailsCard />
    </div>
  );
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const pokemonData: IPokemon | null = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    { cache: "force-cache" }
  ).then((response) => response.json());

  const pokemonSpeciesData: IPokemonSpecies | null = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`,
    { cache: "force-cache" }
  ).then((response) => response.json());

  return {
    props: { pokemonData: pokemonData, pokemonSpeciesData: pokemonSpeciesData },
  };
};
