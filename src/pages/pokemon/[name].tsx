import PokemonDetailsCard from '@/components/PokemonDetailsCard'
import { IPokemon } from '@/types/Pokemon'
import fetcher from '@/utils/fetcher'

import getPokemon from '@/utils/getPokemon'
import { normalizePokemon } from '@/utils/normalizePokemon'
import { GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'

interface PokemonPageProps {
  pokemon: IPokemon
}

const Pokemon: NextPage<PokemonPageProps> = ({ pokemon }) => {
  // Capitalize every first letter in the name
  const formatedName = pokemon.name
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <>
      <Head>
        <title>{formatedName}</title>
        <meta name="description" content={`Stats for ${formatedName}`} />
        <meta property="og:title" content={formatedName} />
      </Head>

      <PokemonDetailsCard pokemon={pokemon} />
    </>
  )
}

export default Pokemon

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ name: string }>) {
  const { name } = params!

  const { pokemonData, pokemonSpeciesData } = await getPokemon({ name })

  if (!(pokemonData && pokemonSpeciesData)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const evolution = await fetcher(pokemonSpeciesData!.evolution_chain.url)

  const pokemon = normalizePokemon({
    pokemon: pokemonData,
    species: pokemonSpeciesData,
    evolution,
  })

  return {
    props: { pokemon },
  }
}

export async function getStaticPaths() {
  const pokemons: any = await fetcher(
    `https:pokeapi.co/api/v2/pokemon/?limit=15`
  )

  return {
    paths: pokemons?.results.map((pokemon: any) => `/pokemon/${pokemon.name}`),
    fallback: 'blocking',
  }
}
