import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import product1 from "../../assets/images/product1.jpg";
import "./productcart.css";

const ProductCart = ({ id, name, price, cover }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product1} alt="cover" />
      </div>
      <div className="product-details" key={id}>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart" onClick={addToCart}>
          <AiOutlinePlusCircle className="plusIcon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
