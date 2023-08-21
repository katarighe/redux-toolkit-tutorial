import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar";
import CartContainer from "./components/navbar/CartContainer";
import { useEffect } from "react";
import calculateTotals from './features/cart/cartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
