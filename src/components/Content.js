import React from "react";
import Item from "./Item";

const Content = ({ name, meals, basket, selected }) => {
  return (
    meals.length > 0 && (
      <div>
        <h3>{name}</h3>
        <div className="category">
          {meals.map((meal) => {
            return (
              <Item
                key={meal.id}
                title={meal.title}
                description={meal.description}
                price={meal.price}
                popular={meal.popular}
                picture={meal.picture}
                onClick={basket}
                isSelected={selected}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Content;
