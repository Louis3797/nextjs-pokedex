import { EvolvesTo } from '@/types/EvolutionChain'
import getBackgroundColors from '@/utils/getBackgroundColors'
import { FC } from 'react'
import { BsCaretRightFill } from 'react-icons/bs'
import EvolutionImage from './EvolutionImage'

interface EvolutionChainProps {
  pokemon: any
}

const EvolutionChain: FC<EvolutionChainProps> = ({ pokemon }) => {
  return (
    <div className="my-8 flex flex-wrap justify-center overflow-visible">
      {pokemon?.evolution?.chain?.species && (
        <EvolutionImage
          species={pokemon.evolution?.chain.species}
          bgColor={pokemon.bgColors}
        />
      )}

      {pokemon.evolution?.chain.evolves_to.length !== 0 && (
        <>
          <BsCaretRightFill className="mb-8 mr-3 self-center text-lg text-secondary xl:mr-6 " />
          {pokemon.evolution?.chain.evolves_to.map(
            (s: EvolvesTo, idx: number) => {
              return (
                <EvolutionImage
                  key={idx}
                  species={s.species}
                  bgColor={pokemon.bgColors}
                />
              )
            }
          )}
        </>
      )}

      {typeof pokemon.evolution?.chain.evolves_to[0]?.evolves_to !==
        'undefined' &&
        pokemon.evolution?.chain.evolves_to[0].evolves_to.length !== 0 && (
          <>
            <BsCaretRightFill className="mb-8 mr-3 self-center text-lg text-secondary  xl:mr-6 " />
            {pokemon.evolution?.chain.evolves_to[0].evolves_to.map(
              (s: EvolvesTo, idx: number) => {
                return (
                  <EvolutionImage
                    key={idx}
                    species={s.species}
                    bgColor={getBackgroundColors(pokemon.types)}
                  />
                )
              }
            )}
          </>
        )}
    </div>
  )
}

export default EvolutionChain
