import React, { useState } from "react";
import { Container, Nav, Input } from "./styles";

const Header = ({ updatePokemons, showCartProp }) => {
  const [input, setInput] = useState("");
  // const [isShowCart, setShowCart] = useState(false);

  // const showCart = () => {
  //   setShowCart(!isShowCart);

  //   console.log(showCartProp);
  // };

  return (
    <Container>
      <Nav>
        <Input
          value={input}
          onChange={async (event) => {
            setInput(event.target.value);
            updatePokemons(input);
          }}
        ></Input>
      </Nav>
      <button
        className="carrinho-button"
        onClick={() => {
          // showCart(isShowCart);
          showCartProp();
        }}
      >
        carrinho
      </button>
    </Container>
  );
};

export default Header;
