import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./cartitems.css";

const CartItems = ({ id, name, price, quantity, showItem }) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  if (showItem) {
    return null;
  }

  return (
    <div className="cardList" key={id}>
      <div className="cartContent">
        <div className="details">
          <p>{name}</p>
          <h3>
            <label htmlFor="">
              Unit Price: <span className="price"> ${price} </span>
            </label>
          </h3>

          <div className="price">
            <div className="qty flexCenter">
              <button className="plus" onClick={incCartitems}>
                <AiOutlinePlus />
              </button>
              <button className="num">{quantity}</button>
              <button className="minus" onClick={descCartitems}>
                <AiOutlineMinus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
