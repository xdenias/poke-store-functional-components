import React, { useState, useEffect, Fragment } from "react";
import api from "../../services/api";
import "../.././App.css";
import Header from "../../components/header";
import Store from "../../components/store";
import Cart from "../../components/cart";
import { Container } from "./style";

const PokemonTypePlant = () => {
  const [pokemons, setPokemons] = useState([]);
  const [preco, setPreco] = useState([]);
  const [priceAside, setPriceAside] = useState([{ name: "", price: 0 }]);
  const [isShowCart, setShowCart] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await api.get(`/plant`);
    const species = data.pokemon_species;
    let ar = [];

    const speciesWithSprites = species.map((pokemon) => {
      const pokemonID = pokemon.url.match(/\d+/g)[1];

      return {
        ...pokemon,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`,
      };
    });

    setPokemons(speciesWithSprites);

    for (var i = 0; i < species.length; i++) {
      let price = Math.floor(Math.random(data.length) * 100);
      ar.push(price);
    }

    setPreco(ar);
  };

  const updatePokemons = (lettersInput) => {
    if (lettersInput === " ") {
      getData();
    } else {
      setPokemons(
        pokemons.filter((eachPokemon) =>
          eachPokemon.name.includes(lettersInput)
        )
      );
    }
  };

  const addPokemon = (price) => {
    setPriceAside(price);
  };

  const showCart = () => {
    setShowCart(!isShowCart);
  };

  return (
    <Fragment>
      <Header showCartProp={showCart} updatePokemons={updatePokemons} />
      <Container id="container">
        <Store pokemons={pokemons} preco={preco} addPokemonProp={addPokemon} />
        <Cart priceAside={priceAside} showCartProp={isShowCart} />
      </Container>
    </Fragment>
  );
};

export default PokemonTypePlant;
