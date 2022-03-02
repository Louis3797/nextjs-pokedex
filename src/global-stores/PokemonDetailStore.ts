import create from "zustand";
import { combine } from "zustand/middleware";
import { IPokemon } from "types/Pokemon";
import { IPokemonSpecies } from "types/PokemonSpecies";

type PokemonDetailStoreProps = {
  pokemon: IPokemon;
  species: IPokemonSpecies;
  setPokemon: (p: IPokemon) => void;
  setSpecies: (s: IPokemonSpecies) => void;
};
export const usePokemonDetailStore = create<PokemonDetailStoreProps>((set) => ({
  pokemon: {} as IPokemon,
  species: {} as IPokemonSpecies,
  setPokemon: (p: IPokemon) => set({ pokemon: p }),
  setSpecies: (s: IPokemonSpecies) => set({ species: s }),
}));
