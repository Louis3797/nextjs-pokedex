/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { BsGithub } from 'react-icons/bs'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 w-full bg-primary px-3 shadow-md shadow-accent/20">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-row items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold text-accent">Pokédex</h1>
        </Link>
        <Link href="https://github.com/Louis3797/nextjs-pokedex">
          <BsGithub className="text-3xl duration-500 ease-in-out hover:text-accent" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar
