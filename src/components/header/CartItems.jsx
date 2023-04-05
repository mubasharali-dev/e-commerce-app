import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { product } from "../../assets/data/data";
import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import "./cartitems.css";

const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
  return (
    <div>
      <div className="cardList">
        <div className="cardContent">
          {id === 1 && (
            <div className="product">
              <img src={product1} alt="" className="productImage" />
              <div className="productDetails">
                <h3 className="productName">{name}</h3>
                <label className="productPrice">Unit Price ${price}</label>
              </div>
            </div>
          )}
          {id === 1 && (
            <div className="product">
              <img src={product2} alt="" className="productImage" />
              <div className="productDetails">
                <h3 className="productName">{name}</h3>
                <label className="productPrice">Unit Price ${price}</label>
              </div>
            </div>
          )}
          {/* <div className="totalPrice">${totalPrice}</div> */}
        </div>
      </div>
    </div>
  );
};
export default CartItems;
