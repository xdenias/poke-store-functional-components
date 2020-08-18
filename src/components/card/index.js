import React from "react";
import currency from "../../utils/";
import { Box } from "./styles";

const Card = ({ pokemons, preco, addPokemonProp }) => {
  return pokemons.map((valor, index) => {
    return (
      <Box className="wrapc_box" key={valor.name}>
        <img src={valor.img} alt={valor.name} />
        <h1>{valor.name}</h1>
        <h4>{currency(preco[index])}</h4>
        <button
          className="wrapc_button"
          onClick={() => {
            addPokemonProp(preco[index], valor.name);
          }}
        >
          Adicionar ao carrinho
        </button>
      </Box>
    );
  });
};

export default Card;
