import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar";
import CartContainer from "./components/navbar/CartContainer";
import { useEffect } from "react";
import calculateTotals from './features/cart/cartSlice';

const { isOpen } = useSelector((state) => state.modal);

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
 
export default App;
