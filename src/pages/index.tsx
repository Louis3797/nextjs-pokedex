import PokemonCard from '@/components/PokemonCard'
import { useInfiniteQuery } from '@/hooks'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useMemo } from 'react'
import { useInView } from 'react-cool-inview'
export interface Result {
  name: string
  url: string
}
export interface PokemonIDList {
  count: number
  next: string
  previous?: any
  results: Result[]
}

const Home: NextPage = () => {
  const { data, next } = useInfiniteQuery()

  const pokemons: any = useMemo(
    () => data?.flatMap((page: any) => page?.results) ?? [],
    [data]
  )

  const { observe } = useInView({
    // For better UX, we can grow the root margin so the data will be loaded earlier
    rootMargin: '300px',
    // When the last item comes to the viewport
    onEnter: ({ unobserve }) => {
      // Pause observe when loading data
      unobserve()

      // Load more data
      next()
    },
  })

  return (
    <>
      <Head>
        <title>Pokedéx</title>
        <meta name="description" content="Get information about all Pokemons" />
        <meta property="og:title" content="Pokedéx" key="Pokedéx" />
      </Head>

      <ul className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-4 p-10 pt-8 md:grid-cols-2 md:gap-5 lg:gap-7 lg:p-16 lg:pt-4 xl:w-2/3 2xl:grid-cols-3">
        {pokemons?.map((data: any, index: number) => {
          const isLast = index === pokemons.length - 1
          const { name, url } = data

          return (
            <li
              key={name}
              ref={isLast ? observe : null}
              className="h-80 w-full"
            >
              <PokemonCard url={url} index={++index} />
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Home
