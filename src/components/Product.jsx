import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

export default function Product(meal) {
  const { name, image, price, description } = meal;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{price} €</p>
        </div>
        <p className="meal-item-description">{description}</p>
        <div className="meal-item-actions">
          <button className="button" onClick={() => addItemToCart(meal)}>
            Add to Cart
          </button>
        </div>
      </article>
    </div>
  );
}
