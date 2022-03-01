import { GetServerSideProps, NextPage } from "next";
import React from "react";
import { IPokemon } from "types/Pokemon";
import { IPokemonSpecies } from "types/PokemonSpecies";

interface PokemonPageProps {
  pokemonData: IPokemon;
  pokemonSpeciesData: IPokemonSpecies;
}
const Pokemon: NextPage<PokemonPageProps> = ({
  pokemonData,
  pokemonSpeciesData,
}) => {
  return <div>{JSON.stringify(pokemonData)}</div>;
};

export default Pokemon;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { name } = context.query;

  const pokemonData: IPokemon | null = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  ).then((response) => response.json());

  const pokemonSpeciesData: IPokemonSpecies | null = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  ).then((response) => response.json());

  return {
    props: { pokemonData: pokemonData, pokemonSpeciesData: pokemonSpeciesData },
  };
};
