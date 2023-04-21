import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./card.css";

export const Card = () => {
  const navigate = useNavigate();
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
              <h2>Shopping Cart</h2>
              <button className="closeButton" onClick={closeCard}>
                <AiOutlineClose className="icon" />
              </button>
            </div>
          )}

          {cardOpen && (
            <div className="cartItemsContainer">
              <div className="cartItemsWrapper">
                {cartItems.map((item) => (
                  <CartItems
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                  />
                ))}
              </div>
            </div>
          )}

          {cardOpen && (
            <div className="checkOutWrapper">
              <div className="checkOut">
                <button
                  onClick={() => {
                    navigate("checkout");
                    closeCard(); // added call to closeCard function
                  }}
                >
                  <span>Proceed to Checkout |</span>
                  <label htmlFor="">${total}</label>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
