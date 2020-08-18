import React, { useState } from "react";
import currency from "../../utils/";
import { Container, Box, Input } from "./styles";

const Store = ({ pokemons, preco, addPokemonProp }) => {
  const [priceAside, setPriceAside] = useState([]);

  const addPokemon = (value, name) => {
    setPriceAside([...priceAside, { name: name, price: value }]);
    addPokemonProp(priceAside);
  };
  return (
    <Container className="wrapc">
      <Box className="wrapc_box">
        <img src="" alt="" />
        <button className="wrapc_button">ADD</button>
      </Box>
      {pokemons.map((valor, index) => {
        return (
          <Box className="wrapc_box" key={valor.name}>
            <img src={valor.img} alt={valor.name} />
            <h1>{valor.name}</h1>
            <h4>{currency(preco[index])}</h4>
            <button
              className="wrapc_button"
              onClick={() => {
                addPokemon(preco[index], valor.name);
              }}
            >
              Adicionar ao carrinho
            </button>
          </Box>
        );
      })}
    </Container>
  );
};

export default Store;
