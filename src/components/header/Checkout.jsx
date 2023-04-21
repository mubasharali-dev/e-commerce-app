import React, { useState } from "react";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handlePlaceOrder = () => {
    // Handle placing order logic here
  };

  return (
    <div>
      <h1>Customer Info</h1>
      <h2>First Name</h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <h2>Last Name</h2>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <h2>Phone Number</h2>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <h2>Address</h2>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
