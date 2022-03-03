/* eslint-disable react/jsx-key */
import React from "react";
import { PokemonImage } from "./PokemonImage";
import { PokemonStats } from "./PokemonStats";

export const PokemonDetailsCard = () => {
  return (
    <div className="flex flex-row w-11/12 2xl:w-8/12 h-3/5 shadow-lg rounded-2xl">
      <PokemonImage />
      <PokemonStats />
    </div>
  );
};
