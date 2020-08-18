import React from "react";
import currency from "../../utils";
// import "../.././App.css";

const Cart = ({ priceAside, showCartProp }) => {
  // const [isShowCart, setShowCart] = useState(false);
  // console.log(isShowCart);

  // useEffect(() => {
  //   setShowCart(showCartProp);
  // }, [showCartProp]);

  const totalPrice = priceAside
    .map((item) => item && item.price)
    .reduce((a, b) => a + b, 0);

  return (
    <aside className={`wrapd ${showCartProp ? "active" : ""}`}>
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
      <button>Finalizar</button>
    </aside>
  );
};

export default Cart;
