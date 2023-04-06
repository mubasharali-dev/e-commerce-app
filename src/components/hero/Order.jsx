import React from "react";
import "./order.css";

const OrderProcess = () => {
  return (
    <div className="order-process">
      <div className="step">
        <div className="number">1</div>
        <h3>Your Order</h3>
        <p>Choose the items you want to purchase</p>
      </div>
      <div className="step">
        <div className="number">2</div>
        <h3>Ready Your Order</h3>
        <p>Confirm your order and make the payment</p>
      </div>
      <div className="step">
        <div className="number">3</div>
        <h3>Packing your Order</h3>
        <p>We will pack your order carefully</p>
      </div>
      <div className="step">
        <div className="number">4</div>
        <h3>And Deliver on time</h3>
        <p>Enjoy your order delivered on time</p>
      </div>
    </div>
  );
};

export default OrderProcess;
