import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart handleCartClose={handleCartClose} />}
      <Header handleCartOpen={handleCartOpen} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
