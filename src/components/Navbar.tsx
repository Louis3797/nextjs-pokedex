/* eslint-disable react/jsx-key */
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="sticky z-50 flex flex-row w-full top-0 lg:mb-0 mb-10 h-14 bg-primary shadow-md justify-between px-3 items-center">
      <Link href="/" passHref>
        <h1 className="text-2xl text-accent font-bold">Pokédex</h1>
      </Link>
      <Link href="https://github.com/Louis3797/nextjs-pokedex" passHref>
        <BsGithub className="text-3xl hover:text-accent duration-500 ease-in-out" />
      </Link>
    </div>
  );
};
