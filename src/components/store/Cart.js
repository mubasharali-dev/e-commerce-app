// Cart.js
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let total = 0;
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity}
            </div>
            <div>Total: ${item.totalPrice}</div>
          </li>
        ))}
      </ul>
      <div>Total Items: {totalQuantity}</div>
    </div>
  );
}

export default Cart;
