import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import product from "../../assets/data/data";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import "./card.css";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const closeCard = () => {
    setCardOpen(false);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card-container">
        <div className="card" onClick={() => setCardOpen(!cardOpen)}>
          <BiShoppingBag className="shoppingIcon" />
          <span className="flexCenter">{quantity}</span>
        </div>
        <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

        <div className={cardOpen ? "cartItem" : "cardhide"}>
          {cardOpen && (
            <div className="title flex">
              <h2>Shopping Card</h2>
              <button className="closeButton" onClick={closeCard}>
                <AiOutlineClose className="icon" />
              </button>
            </div>
          )}

          {cartItems.map((item) => (
            <CartItems
              id={item.id}
              cover={item.cover}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}

          {cardOpen && (
            <div className="checkOut">
              <button>
                <span>Place Order |</span>
                <label htmlFor="">${total}</label>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
