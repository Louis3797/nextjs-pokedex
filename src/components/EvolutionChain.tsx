/* eslint-disable react/jsx-key */
import { usePokemonDetailStore } from "global-stores/PokemonDetailStore";
import React, { useEffect, useState } from "react";
import { BsCaretRightFill } from "react-icons/bs";
import { EvolvesTo, IEvolutionChain } from "types/EvolutionChain";
import { getBackgroundColors } from "utils/getBackgroundColors";
import { EvolutionImage } from "./EvolutionImage";

interface EvolutionChainProps {
  chainURL: string;
}
export const EvolutionChain: React.FC<EvolutionChainProps> = ({ chainURL }) => {
  const pokemon = usePokemonDetailStore((state) => state.pokemon);

  const [data, setData] = useState<IEvolutionChain>();

  async function fetchData() {
    const evoData = await fetch(chainURL).then((response) => response.json());
    setData(evoData);
  }

  useEffect(() => {
    fetchData();
    return () => {
      data;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainURL]);
  return (
    <div className="flex flex-row justify-center w-full h-full flex-wrap overflow-visible mt-6">
      {typeof data?.chain.species !== "undefined" && (
        <EvolutionImage
          species={data?.chain.species}
          bgColor={getBackgroundColors(pokemon.types)}
        />
      )}
      {data?.chain.evolves_to.length !== 0 && (
        <>
          <BsCaretRightFill className="self-center mb-8 text-lg text-secondary mr-3 xl:mr-6 " />
          {data?.chain.evolves_to.map((s: EvolvesTo, idx: number) => {
            return (
              <EvolutionImage
                key={idx}
                species={s.species}
                bgColor={getBackgroundColors(pokemon.types)}
              />
            );
          })}
        </>
      )}
      {typeof data?.chain.evolves_to[0]?.evolves_to !== "undefined" &&
        data?.chain.evolves_to[0].evolves_to.length !== 0 && (
          <>
            <BsCaretRightFill className="self-center mb-8 text-lg text-secondary mr-3  xl:mr-6 " />
            {data?.chain.evolves_to[0].evolves_to.map(
              (s: EvolvesTo, idx: number) => {
                return (
                  <EvolutionImage
                    key={idx}
                    species={s.species}
                    bgColor={getBackgroundColors(pokemon.types)}
                  />
                );
              }
            )}
          </>
        )}
    </div>
  );
};
