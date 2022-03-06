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
  next: "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0",
  setPokemons: (newPokemon: IPokemon) =>
    set((state) => {
      state.pokemon[newPokemon.id - 1] = newPokemon;
    }),
  setNext: (newNext: string | null) => set({ next: newNext }),
}));
