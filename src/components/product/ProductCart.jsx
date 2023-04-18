import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./productcart.css";
import product1 from "../../assets/images/product1.jpg";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
const ProductCart = ({ id, name, price, cover }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <Link>
          <img src={product1} alt="cover" />
        </Link>
      </div>
      <div className="product-details" key={id}>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart" onClick={addToCart}>
          <AiOutlinePlusCircle />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
