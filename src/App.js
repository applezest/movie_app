import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 0,
    name: "kimchi",
    rating: 5
  },
  {
    id: 1,
    name: "ramen",
    rating: 4.4
  },
  {
    id: 2,
    name: "sushi",
    rating: 3.3
  }
];

function Food({ id, name, rating }){
  return <p>
    I like {name}! {rating}/5.0    
  </p>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
