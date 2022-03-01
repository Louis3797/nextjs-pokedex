import React from "react";

interface PokemonCard {
  id: number;
  name: string;
  image: string;
  type: string;
}

const PokemonCard: React.FC<PokemonCard> = ({ id, name, image, type }) => {
  return <div></div>;
};

export default PokemonCard;
