import React from "react";
import Counter from "./Counter";

const Panier = ({ basket, plus, minus }) => {
  let subTotal = 0;
  subTotal = basket.map((item) =>
    Number((subTotal += Number(item.price * item.quantity).toFixed(2)))
  );
  const shippingFee = 2.5;
  let total = Number(subTotal + shippingFee);

  return (
    <div className="panier">
      <button>Valider mon panier</button>
      {basket.length < 1 && <span>Votre panier est vide</span>}
      {basket.map((elem, index) => {
        return (
          <div key={index}>
            <button
              onClick={() => {
                minus(index);
              }}
            >
              -
            </button>
            <span>{elem.quantity}</span>
            <button
              onClick={() => {
                plus(index);
              }}
            >
              +
            </button>
            <span>{elem.title}</span>
            <span>{elem.price}</span>
          </div>
        );
      })}
      <p>Sous-total</p>
      <p>{subTotal}</p>
      <p>Frais de livraison :</p>
      <p>{shippingFee}</p>
      <hr></hr>
      <p>Total</p>
      <p>{total}</p>
    </div>
  );
};

export default Panier;
