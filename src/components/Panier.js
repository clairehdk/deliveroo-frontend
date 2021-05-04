import React from "react";
import Counter from "./Counter";

const Panier = ({ basket, plus, minus, counter }) => {
  return (
    <div className="panier">
      <button>Valider mon panier</button>
      <span>Votre panier est vide</span>
      {basket.map((elem, index) => {
        return (
          <div key={index}>
            {/* {!elem.title && ( */}
            <>
              {/* <Counter plus={plus} minus={minus} counter={counter} /> */}

              <button
                onClick={() => {
                  minus(index);
                }}
              >
                -
              </button>
              <span>{counter}</span>
              <button
                onClick={() => {
                  plus(index);
                }}
              >
                +
              </button>
              <span>{elem.title}</span>
              <span>{elem.price}</span>
            </>
            {/* )} */}
          </div>
        );
      })}
    </div>
  );
};

export default Panier;
