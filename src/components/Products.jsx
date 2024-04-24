import { useState, useEffect } from "react";

import { fetchAvailableMeals } from "../http.js";
import Product from "./Product.jsx";

export default function Products() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function getAvailableMeals() {
      const data = await fetchAvailableMeals();

      setMeals(data);
    }

    getAvailableMeals();
  }, []);

  return (
    <div id="meals">
      {meals && meals.map((meal) => <Product key={meal.id} {...meal} />)}
    </div>
  );
}
