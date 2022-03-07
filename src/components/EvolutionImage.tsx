/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";

import { Species } from "types/EvolutionChain";
import { IMG_URL } from "utils/constants";
import Link from "next/link";

interface EvolutionImageProps {
  species: Species;
  bgColor: { light: string; medium: string }[];
}
export const EvolutionImage: React.FC<EvolutionImageProps> = ({
  species,
  bgColor,
}) => {
  return (
    <div className="flex flex-col items-center justify-center mb-3 mr-3 xl:mr-6 ease-out-in duration-700 hover:-translate-y-2">
      <Link href={`/pokemon/${species.name}`} passHref>
        <div
          className="flex flex-col h-24 w-24 relative rounded-full justify-center items-center"
          style={{
            background: `radial-gradient(#fafafa,50%, ${bgColor[0].medium})`,
          }}
        >
          <img
            key={species.name}
            src={`${IMG_URL + species.url.split("/").slice(-2, -1)[0]}.webp`}
            height={80}
            width={80}
            alt={species.name}
          />
        </div>
      </Link>
      <p className="capitalize text-sm font-semibold">{species.name}</p>
    </div>
  );
};
