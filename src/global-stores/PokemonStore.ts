import create from "zustand";
import { IPokemon } from "types/Pokemon";

type StoreProps = {
  pokemon: IPokemon[];
  next: string | null;
  setPokemons: (newPokemon: IPokemon) => void;
  setNext: (newNext: string | null) => void;
};

export const usePokemonStore = create<StoreProps>((set) => ({
  pokemon: [],
  setPokemons: (newPokemon: IPokemon) =>
    set((state) => {
      ({ pokemon: state.pokemon.push(newPokemon) });
    }),
  next: "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
  setNext: (newNext: string | null) => set((state) => ({ next: newNext })),
}));
