import React from "react";
import "./myorders.css";

const orders = [
  { id: 1, status: "delivered", date: "2023-04-20", total: 25.0 },
  { id: 2, status: "delivered", date: "2023-04-18", total: 15.0 },
  { id: 3, status: "delivered", date: "2023-04-16", total: 10.0 },
  { id: 4, status: "pending", date: "2023-04-12", total: 30.0 },
];

const MyOrders = () => {
  return (
    <div className="orders-container">
      <hr className="horizontal-rule" />
      <h2 className="myorders">My Orders</h2>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td className={order.status}>{order.status}</td>
              <td>{order.date}</td>
              <td className="total">${order.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
