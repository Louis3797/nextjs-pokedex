import { Ability } from '@/types/Pokemon'
import { Genera } from '@/types/PokemonSpecies'
import capitalizeFirstLetter from './capatilize'

const getStats = ({ species, pokemon }: any) => {
  const stats = [
    {
      title: 'Species',
      content: species?.genera?.find((l: Genera) => l.language.name === 'en')
        ?.genus,
    },
    {
      title: 'Habitat',
      content: capitalizeFirstLetter(species?.habitat?.name),
    },
    {
      title: 'Height',
      content: pokemon?.height?.toString().padEnd(1, '.0') + ' m',
    },
    {
      title: 'Weight',
      content: (pokemon?.weight / 10).toFixed(1) + ' kg',
    },
    {
      title: 'Abilities',
      content: pokemon?.abilities?.map((abilitie: Ability) => {
        return capitalizeFirstLetter(abilitie.ability.name) + '\n'
      }),
    },
    {
      title: 'Base Exp',
      content: pokemon?.base_experience.toString(),
    },
    {
      title: 'Catch Rate:',
      content: ((species?.capture_rate / 255) * 100).toFixed(1) + '%',
    },
    {
      title: 'Growth Rate',
      content: capitalizeFirstLetter(species?.growth_rate.name),
    },
  ]

  return stats
}

export default getStats
