import { IPokemon } from '@/types/Pokemon'
import { IPokemonSpecies } from '@/types/PokemonSpecies'
import fetcher from './fetcher'

const getPokemon = async ({ name }: { name: string }) => {
  const pokemonData: IPokemon | null = await fetcher(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  )

  const pokemonSpeciesData: IPokemonSpecies | null = await fetcher(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  )

  return {
    pokemonData,
    pokemonSpeciesData,
  }
}

export default getPokemon
