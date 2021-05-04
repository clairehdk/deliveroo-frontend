import React from "react";
import Item from "./Item";

const Content = ({ name, meals, basket }) => {
  return (
    meals.length > 0 && (
      <div>
        <h3>{name}</h3>
        <div className="category">
          {meals.map((meal) => {
            return (
              <Item
                id={meal.id}
                key={meal.id}
                title={meal.title}
                description={meal.description}
                price={meal.price}
                popular={meal.popular}
                picture={meal.picture}
                onClick={basket}
              />
            );
          })}
        </div>
      </div>
    )
  );
};

export default Content;
