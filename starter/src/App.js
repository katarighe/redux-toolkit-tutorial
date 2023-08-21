import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar";
import CartContainer from "./components/navbar/CartContainer";
import { useEffect } from "react";
import calculateTotals from './features/cart/cartSlice';
import Modal from './components/Modal';

const { isOpen } = useSelector((state) => state.modal);

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
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
