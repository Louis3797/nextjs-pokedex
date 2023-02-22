import { Type } from '@/types/Pokemon'
import PokemonTypeColor from '@/utils/colors'
import { IMG_URL } from '@/utils/constants'
import fetcher from '@/utils/fetcher'
import { normalizePokemonLite } from '@/utils/normalizePokemon'
import Image from 'next/future/image'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import useSWRImmutable from 'swr/immutable'
import { PokemonIcon } from './Icons'

interface PokemonCardProps {
  url: string
  index: number
  [x: string]: any
}

const PokemonCard: FC<PokemonCardProps> = ({ url, index, ...props }) => {
  const { data, error } = useSWRImmutable(url, fetcher)

  const pokemon = useMemo(() => {
    if (!data) return null

    return normalizePokemonLite({ pokemon: data })
  }, [data])

  if (error) return null
  if (!pokemon) return null

  const { name, bgColors, id, types } = pokemon

  return (
    <Link
      href={`pokemon/${name}`}
      prefetch={false}
      className="hover:shadow-gray-300 flex h-full w-full flex-col items-center justify-between rounded-2xl shadow-lg shadow-secondary/10 transition-all duration-500 ease-in-out will-change-transform hover:-translate-y-3 hover:scale-105"
      {...props}
    >
      <div
        className="relative flex h-2/3 w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl"
        style={{
          background: `linear-gradient(0deg, #fafafa, ${bgColors[0].light})`,
        }}
      >
        <PokemonIcon className="absolute w-52 fill-primary stroke-0 opacity-25" />

        <p
          className="absolute top-2 left-8 text-4xl font-bold tracking-widest drop-shadow-2xl"
          style={{
            color: bgColors[0].medium,
          }}
        >
          {`#${id.toString().padStart(3, '0')}`}
        </p>

        <Image
          src={`${IMG_URL + id}.webp`}
          alt={name}
          height={200}
          width={200}
          loading={index === 1 ? 'eager' : 'lazy'}
          decoding="async"
          className="drop-shadow xl:h-36 xl:w-36 2xl:h-44 2xl:w-44"
          style={{ contentVisibility: 'auto' }}
        />
      </div>

      <div className="flex w-full flex-1 flex-col items-center justify-evenly ">
        <h3 className="text-2xl font-bold capitalize tracking-wide text-secondary">
          {name}
        </h3>

        <div className="flex w-full flex-row items-center justify-center gap-4">
          {types.map((t: Type, idx: number) => {
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: Object.entries(PokemonTypeColor).filter(
                    ([key]) => key === t.type.name
                  )[0][1].medium,
                }}
                className="rounded-md px-2 py-1"
              >
                <p className="text-xs font-semibold tracking-wide text-primary">
                  {t.type.name.toUpperCase()}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </Link>
  )
}

export default PokemonCard
