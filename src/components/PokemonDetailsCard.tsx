/* eslint-disable react/jsx-key */
import React from "react";
import { IPokemon } from "types/Pokemon";
import { IPokemonSpecies } from "types/PokemonSpecies";
import { PokemonImage } from "./PokemonImage";

export const PokemonDetailsCard = () => {
  return (
    <div className="flex sm:flex-col lg:flex-row w-11/12 2xl:w-8/12 h-3/5 shadow-lg rounded-2xl">
      <PokemonImage />
    </div>
  );
};
