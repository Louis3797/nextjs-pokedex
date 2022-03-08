/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React, { useMemo } from "react";
import { Name } from "types/PokemonSpecies";
import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";
import { IMG_URL } from "utils/constants";
import { getBackgroundColors } from "utils/getBackgroundColors";

export const PokemonImage = () => {
  const pokemon = usePokemonDetailStore((state) => state.pokemon);
  const species = usePokemonDetailStore((state) => state.species);

  const backgroundColors = useMemo(
    () => getBackgroundColors(pokemon.types),
    [pokemon.types]
  );

  const jpName: Name | undefined = species.names.find(
    (name) => name.language.name === "ja-Hrkt"
  );

  return (
    <div
      className="flex flex-col h-full lg:w-1/2 w-full relative lg:rounded-l-2xl rounded-t-2xl justify-start items-center"
      style={{
        background: `radial-gradient(#fafafa,30%, ${backgroundColors[0].medium})`,
      }}
    >
      <div className="justify-start items-start w-full py-4 px-5">
        <Link href={"/"} passHref>
          <BsArrowLeftShort className="text-4xl text-primary mb-1 opacity-80 font-light hover:text-secondary" />
        </Link>
        <p className="md:text-xl text-lg font-medium text-primary px-2">
          {"#" + pokemon.id.toString().padStart(3, "0")}
        </p>
        <p className="md:text-3xl text-2xl font-semibold text-primary px-2 capitalize">
          {pokemon.name}
        </p>
      </div>
      <p className="font-bold md:text-7xl text-5xl drop-shadow-xl tracking-widest absolute text-primary opacity-60 top-32 lg:top-44">
        {jpName?.name}
      </p>
      <img
        key={pokemon.id}
        src={`${IMG_URL + pokemon.id}.webp`}
        alt={pokemon.name}
        className="animate-poke-bounce h-52 w-52 md:w-96 md:h-96 md:mt-20"
      />
    </div>
  );
};
