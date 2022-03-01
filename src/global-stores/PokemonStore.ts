import create from "zustand";
import { combine } from "zustand/middleware";

export const usePokemonStore = create(
  combine(
    {
      pokemon: [{}],
      next: "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
    },
    (set, get) => ({
      setPokemons: (newPokemon: {}) => {
        const p = get().pokemon;
        p.push(newPokemon);
        set({ pokemon: p });
      },
      setNext: (newNext: string) => {
        set({ next: newNext });
      },
    })
  )
);
