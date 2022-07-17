import PokemonImage from './PokemonImage'
import PokemonStats from './PokemonStats'

interface PokemonDetailsCardProps {
  pokemon: any
}

const PokemonDetailsCard = ({ pokemon }: PokemonDetailsCardProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center p-5">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 overflow-hidden rounded-2xl shadow-lg shadow-accent/20 lg:max-h-[70vh] lg:grid-cols-2">
        <PokemonImage pokemon={pokemon} />
        <PokemonStats pokemon={pokemon} />
      </div>
    </div>
  )
}

export default PokemonDetailsCard
