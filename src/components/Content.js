import React from "react";

const Content = ({ key, name, meals }) => {
  //   const [isLong, setLength] = useState(false);

  //   const handleLength = () => {
  //     if (meal.description.length > 10) {
  //       setLength(true);
  //     }
  //   };
  return (
    <div key={key}>
      {meals.length > 0 && <h3>{name}</h3>}
      <div className="category">
        {meals.map((meal, index) => {
          return (
            <div>
              <div className="meal">
                <h4>{meal.title}</h4>
                {meal.description && <p>{meal.description}</p>}
                <div>
                  <span>{meal.price} €</span>
                  {meal.popular && <i class="fas fa-star"></i>}
                  {meal.popular && <span class="pop">Populaire</span>}
                </div>
              </div>
              {meal.picture && <img src={meal.picture} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
