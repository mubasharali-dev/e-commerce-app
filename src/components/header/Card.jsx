import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import CartItems from "./CartItems";
import { product } from "../../assets/data/data";
import "./card.css";

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cardContainer">
      <div className="card" onClick={openCart}>
        <BiShoppingBag className="ShoppingIcon" />
        <span className="flexCenter">{cartItems.length}</span>
      </div>
      {cartOpen && (
        <div className="cartOverlay" onClick={closeCart}>
          <div className="cart">
            <div className="cartHeader">
              <h2>Shopping Cart</h2>
              <button className="closeButton" onClick={closeCart}>
                <AiOutlineClose />
              </button>
            </div>
            {product.slice(0, 1).map((item) => (
              <CartItems
                id={item.id}
                cover={item.cover}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                totalPrice={item.totalPrice}
              />
            ))}
            <div className="cartFooter">
              <p>Total: {cartTotal}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
