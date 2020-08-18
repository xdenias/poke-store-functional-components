import React, { useState } from "react";
import currency from "../../utils";
// import "../.././App.css";
import { Aside } from "./styles";
import Modal from "../modal";

const Cart = ({ priceAside, showCartProp }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(!show);
  };

  const totalPrice = priceAside
    .map((item) => item && item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <Aside className={`wrapd ${showCartProp ? "active" : ""}`}>
      <h1>Carrinho</h1>
      <div className="Itens">
        <table>
          <tbody>
            {priceAside.map((item) => {
              return (
                <tr key={`${item.name}-${item.price}`}>
                  <td>{item.name}</td>
                  <td>R${item.price},00</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h3>Total</h3>
      <div>{currency(totalPrice)}</div>
      <button
        onClick={() => {
          showModal();
        }}
      >
        Finalizar
      </button>

      <Modal
        onClose={() => {
          showModal();
          // this.showModal();
          // this.resetPrices();
        }}
        show={show}
      >
        New pokemon, new adventure hahaha!
      </Modal>
    </Aside>
  );
};

export default Cart;
