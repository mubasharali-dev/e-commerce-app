import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./productcart.css";
import product1 from "../../assets/images/product1.jpg";
const ProductCart = ({ cover, name, price }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Link>
          <img src={product1} alt="cover" />
        </Link>
      </div>
      <div className="product-details">
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
        <button className="add-to-cart">
          <AiOutlinePlusCircle />
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
