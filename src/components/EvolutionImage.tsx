import { Species } from '@/types/EvolutionChain'
import { IMG_URL } from '@/utils/constants'
import Link from 'next/link'
import { FC } from 'react'

interface EvolutionImageProps {
  species: Species
  bgColor: { light: string; medium: string }[]
}

const EvolutionImage: FC<EvolutionImageProps> = ({ species, bgColor }) => {
  return (
    <div className="ease-out-in mb-3 mr-3 flex flex-col items-center justify-center duration-700 will-change-transform hover:-translate-y-2 xl:mr-6">
      <Link
        href={`/pokemon/${species.name}`}
        className="relative flex h-24 w-24 flex-col items-center justify-center rounded-full"
        style={{
          background: `radial-gradient(#fafafa,50%, ${bgColor[0].medium})`,
        }}
      >
        {/* The image component is not used here because this project is hosted by vercel and they 
      only allow 1000 image optimizations per month on the free tier. */}
        <img
          key={species.name}
          src={`${IMG_URL + species.url.split('/').slice(-2, -1)[0]}.webp`}
          height={80}
          width={80}
          alt={species.name}
        />
      </Link>
      <p className="text-sm font-semibold capitalize">{species.name}</p>
    </div>
  )
}

export default EvolutionImage
