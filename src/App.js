import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <Fragment>
      {cartOpen && <Cart handleCartClose={handleCartClose} />}
      <Header handleCartOpen={handleCartOpen} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
