import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./cartitems.css";

const CartItems = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };

  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <div className="cardList" key={id}>
      <div className="cartContent">
        <div className="details">
          <p className="product-name">{name}</p>
          <div className="price">
            <span className="unitPrice">Unit Price:</span>
            <span className="price-value">${price}</span>
          </div>
        </div>

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
  );
};

export default CartItems;
