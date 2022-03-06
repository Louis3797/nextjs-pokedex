/* eslint-disable react/jsx-key */
import React from "react";
import { PokemonImage } from "./PokemonImage";
import { PokemonStats } from "./PokemonStats";

export const PokemonDetailsCard = () => {
  return (
    <div className="flex lg:flex-row flex-col w-11/12 2xl:w-8/12 lg:h-3/5 h-screen shadow-lg rounded-2xl mt-6">
      <PokemonImage />
      <PokemonStats />
    </div>
  );
};
