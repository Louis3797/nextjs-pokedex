import { FlavorTextEntry } from '@/types/PokemonSpecies'
import { IMG_URL } from './constants'
import getBackgroundColors from './getBackgroundColors'
import getStats from './getStats'

interface NormalizePokemon {
  pokemon: any
  species: any
  evolution: any
}

export const normalizePokemon = ({
  pokemon,
  species,
  evolution,
}: NormalizePokemon) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    jpName: species.names.find((name: any) => name.language.name === 'ja-Hrkt')
      .name,
    image: `${IMG_URL + pokemon.id}.webp`,
    bgColors: getBackgroundColors(pokemon.types),
    types: pokemon.types,
    flavorText: species.flavor_text_entries.find(
      (l: FlavorTextEntry) => l.language.name === 'en'
    )?.flavor_text,
    stats: getStats({ species, pokemon }),
    evolution: evolution,
  }

  return data
}

interface NormalizePokemonLite {
  pokemon: any
}

export const normalizePokemonLite = ({ pokemon }: NormalizePokemonLite) => {
  const data = {
    id: pokemon.id,
    name: pokemon.name,
    image: `${IMG_URL + pokemon.id}.webp`,
    bgColors: getBackgroundColors(pokemon.types),
    types: pokemon.types,
  }

  return data
}
