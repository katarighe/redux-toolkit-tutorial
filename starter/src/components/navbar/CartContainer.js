import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const dispatch = useDispatch;
  const { cartitems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <selection className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </selection>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartitems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <div class="cart-total">
          <hr />
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
