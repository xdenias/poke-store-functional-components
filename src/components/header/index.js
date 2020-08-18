import React, { useState } from "react";
import { Container, Nav, Input } from "./styles";

const Header = ({ updatePokemons, showCartProp }) => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Nav>
        <Input
          value={input}
          placeholder="Digite qual pokemon deseja procurar"
          onChange={(event) => {
            setInput(event.target.value);
            updatePokemons(event.target.value);
          }}
        ></Input>
      </Nav>
      <button
        className="carrinho-button"
        onClick={() => {
          showCartProp();
        }}
      >
        carrinho
      </button>
    </Container>
  );
};

export default Header;
