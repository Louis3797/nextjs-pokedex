/* eslint-disable react/jsx-key */
import { Type } from '@/types/Pokemon'
import PokemonTypeColor from '@/utils/colors'
import EvolutionChain from './EvolutionChain'
import Stats from './Stats'

interface PokemonStatsProps {
  pokemon: any
}

const PokemonStats = ({ pokemon }: PokemonStatsProps) => {
  return (
    <div className="overscroll-visible flex h-full w-full flex-col items-start justify-start bg-primary lg:max-h-[70vh] lg:overflow-y-auto">
      <div className="p-5">
        <div className="mb-5 flex w-full flex-row items-center justify-center gap-4">
          {pokemon.types.map((t: Type, idx: number) => {
            const name = t.type.name
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: Object.entries(PokemonTypeColor).filter(
                    ([key]) => key === name
                  )[0][1].medium,
                }}
                className="select-none rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wide text-primary"
              >
                {name}
              </div>
            )
          })}
        </div>

        <p className="text-lg font-semibold text-secondary" key={pokemon.id}>
          {pokemon.flavorText}
        </p>

        <Stats stats={pokemon.stats} />

        <EvolutionChain pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonStats
