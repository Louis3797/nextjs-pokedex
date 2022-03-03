/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React, { useMemo } from "react";
import Image from "next/image";
import { Name } from "types/PokemonSpecies";
import Link from "next/link";
import { capitalizeFirstLetter } from "utils/capatilize";
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
      className="flex flex-col h-full w-1/2 relative rounded-l-2xl justify-center items-center"
      style={{
        background: `radial-gradient(#fafafa,30%, ${backgroundColors[0].medium})`,
      }}
    >
      <div className="justify-start items-start w-full py-4 px-5 top-0 absolute">
        <Link href={"/"} passHref>
          <BsArrowLeftShort className="text-4xl text-primary mb-1 opacity-80 font-light hover:text-secondary" />
        </Link>
        <p className="text-xl font-medium text-primary px-2">
          {"#" + pokemon.id.toString().padStart(3, "0")}
        </p>
        <p className="text-3xl font-semibold  text-primary px-2">
          {capitalizeFirstLetter(pokemon.name)}
        </p>
      </div>
      <p className="font-bold text-7xl drop-shadow-xl tracking-widest absolute text-primary opacity-60 top-44">
        {jpName?.name}
      </p>
      <Image
        key={pokemon.id}
        src={`${IMG_URL + pokemon.id.toString().padStart(3, "0")}.png`}
        alt={pokemon.name}
        height={350}
        width={350}
        className="animate-poke-bounce"
      />
    </div>
  );
};
