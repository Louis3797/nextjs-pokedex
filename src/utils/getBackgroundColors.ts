import { Type } from '@/types/Pokemon'
import PokemonTypeColor from './colors'

const getBackgroundColors = (
  type: Type[]
): { light: string; medium: string }[] => {
  return type.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(PokemonTypeColor).filter(
      ([key, _]) => key === type.name
    )

    return backgroundColor
  })
}

export default getBackgroundColors
