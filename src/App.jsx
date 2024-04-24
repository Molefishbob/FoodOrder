import Header from "./components/Header";
import Products from "./components/Products";
import CartContextProvider from "./store/shopping-cart-context";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Products />
    </CartContextProvider>
  );
}

export default App;
