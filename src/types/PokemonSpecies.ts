export interface GrowthRate {
  name: string;
  url: string;
}

export interface Pokedex {
  name: string;
  url: string;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex: Pokedex;
}

export interface EggGroup {
  name: string;
  url: string;
}

export interface Color {
  name: string;
  url: string;
}

export interface Shape {
  name: string;
  url: string;
}

export interface EvolvesFromSpecies {
  name: string;
  url: string;
}

export interface EvolutionChain {
  url: string;
}

export interface Generation {
  name: string;
  url: string;
}

export interface Language {
  name: string;
  url: string;
}

export interface Name {
  name: string;
  language: Language;
}

export interface Language2 {
  name: string;
  url: string;
}

export interface Version {
  name: string;
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: Language2;
  version: Version;
}

export interface Language3 {
  name: string;
  url: string;
}

export interface FormDescription {
  description: string;
  language: Language3;
}

export interface Language4 {
  name: string;
  url: string;
}

export interface Genera {
  genus: string;
  language: Language4;
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface Variety {
  is_default: boolean;
  pokemon: Pokemon;
}

export interface IPokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRate;
  pokedex_numbers: PokedexNumber[];
  egg_groups: EggGroup[];
  color: Color;
  shape: Shape;
  evolves_from_species: EvolvesFromSpecies;
  evolution_chain: EvolutionChain;
  habitat?: any;
  generation: Generation;
  names: Name[];
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: FormDescription[];
  genera: Genera[];
  varieties: Variety[];
}
