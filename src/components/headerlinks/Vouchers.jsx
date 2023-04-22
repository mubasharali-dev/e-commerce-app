import React, { useState, useEffect } from "react";
import "./vouchers.css";

const Vouchers = () => {
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    // This is where you would fetch the voucher data from an API
    // For now, we're just using dummy data
    const dummyVouchers = [
      {
        code: "ABC123",
        priceLimit: "$25.00",
        timeLimit: "2023-05-31",
        category: "Health",
      },
      {
        code: "DEF456",
        priceLimit: "$20.00",
        timeLimit: "2023-06-30",
        category: "Baby Care",
      },
      {
        code: "GHI789",
        priceLimit: "$10.00",
        timeLimit: "2023-07-31",
        category: "Medicine",
      },
    ];

    setVouchers(dummyVouchers);
  }, []);

  return (
    <div className="vouchers-container">
      {/* <hr /> */}
      <h1 className="vouchers-title">Vouchers</h1>
      <div className="vouchers-list">
        {vouchers.map((voucher) => (
          <div key={voucher.code} className="voucher-card">
            <p className="voucher-category">{voucher.category}</p>
            <p className="voucher-code">{voucher.code}</p>
            <p className="voucher-price-limit">
              Price Limit: {voucher.priceLimit}
            </p>
            <p className="voucher-time-limit">
              Time Limit: {voucher.timeLimit}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vouchers;
