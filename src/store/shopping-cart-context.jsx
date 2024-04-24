import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingCartState, setShoppingCartState] = useState([]);

  function handleAddItemToCart(newItem) {
    setShoppingCartState((prevState) => {
      const updatedItems = [...prevState];

      // Check if the item exists in the cart
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === newItem.id
      );

      // If index is 0 or larger
      if (existingItemIndex >= 0) {
        // Find object reference from list
        const existingItem = updatedItems[existingItemIndex];

        // If objet reference found increase quantity by one
        if (existingItem) {
          const updatedItem = {
            ...existingItem,
            quantity: existingItem.quantity + 1,
          };
          updatedItems[existingItemIndex] = updatedItem;
        } else {
          // Create a new item in cart
          updatedItems.push({ ...newItem, quantity: 1 });
        }
      } else {
        // Create a new item in cart
        updatedItems.push({ ...newItem, quantity: 1 });
      }

      return [...updatedItems];
    });
  }

  function handleUpdateCartItem(itemId, amount) {
    setShoppingCartState((prevState) => {
      const updatedItems = [...prevState];

      // Find the index of cart item
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === itemId
      );

      // If item found update amount. Otherwise return previous state.
      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += amount;
      }

      return [...updatedItems];
    });
  }

  const context = {
    items: shoppingCartState,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItem,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
}
