import React from "react";

const Item = ({
  title,
  description,
  picture,
  price,
  popular,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => {
        {
          onClick(title, price);
        }
      }}
    >
      <div className="meal">
        <h4>{title}</h4>
        {description && <p>{description}</p>}
        <div>
          <span>{price} €</span>
          {popular && <i className="fas fa-star"></i>}
          {popular && <span className="pop">Populaire</span>}
        </div>
      </div>
      {picture && <img src={picture} alt={title} />}
    </div>
  );
};

export default Item;
