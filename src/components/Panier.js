import React from "react";
import Counter from "./Counter";

const Panier = ({ basket, plus, minus }) => {
  let subtotal = 0;
  const shippingFee = 2.5;

  return (
    <div className="panier">
      {/* <div className="empty_cart"> */}
      <button className={basket.length < 1 && "empty"}>
        Valider mon panier
      </button>
      {/* </div> */}
      {basket.length < 1 ? (
        <span className="empty_cart">Votre panier est vide</span>
      ) : (
        basket.map((elem, index) => {
          subtotal += elem.quantity * elem.price;
          return (
            <div className="count" key={index}>
              <div>
                <div>
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
                </div>
                <div>
                  <span>{elem.title}</span>
                </div>
              </div>
              <div>
                <span>{elem.price} €</span>
              </div>
            </div>
          );
        })
      )}
      {basket.length >= 1 && (
        <div>
          <hr></hr>
          <div className="total">
            <p>Sous-total</p>
            <p>{subtotal.toFixed(2)} €</p>
          </div>
          <div className="total">
            <p>Frais de livraison :</p>
            <p>{shippingFee.toFixed(2)} €</p>
          </div>
          <hr></hr>
          <div className="total final">
            <p>Total</p>
            <p>{(subtotal + shippingFee).toFixed(2)} €</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Panier;
