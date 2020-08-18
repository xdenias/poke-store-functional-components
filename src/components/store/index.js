import React from "react";

import { Container, Box } from "./styles";
import Card from "../card";

const Store = ({ pokemons, preco, addPokemonProp }) => {
  return (
    <Container className="wrapc">
      <Box className="wrapc_box">
        <img src="" alt="" />
        <button className="wrapc_button">ADD</button>
      </Box>
      <Card pokemons={pokemons} preco={preco} addPokemonProp={addPokemonProp} />
    </Container>
  );
};

export default Store;
