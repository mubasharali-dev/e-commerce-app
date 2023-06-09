import React, { useState } from "react";
import "./checkout.css";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handlePlaceOrder = () => {
    // Handle placing order logic here

    // Reset all state variables to their initial empty values
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
    setCity("");
    setCountry("");
    setZipcode("");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">Customer Info</h1>
      <div className="customer-info">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            placeholder="Write your name..."
            id="firstName"
            className="form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Write your last name..."
            id="lastName"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">
            Contact:
          </label>
          <input
            type="text"
            placeholder="0300-1234567"
            id="phoneNumber"
            className="form-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            placeholder="abc@gmail.com"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            placeholder="House #1 Street #1"
            id="address"
            className="form-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="zipcode" className="form-label">
            Zip-Code:
          </label>
          <input
            placeholder="e.g. 544444"
            type="text"
            id="zipcode"
            className="form-input"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            placeholder="California"
            id="city"
            className="form-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            placeholder="USA"
            id="country"
            className="form-input"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handlePlaceOrder} className="place-order-btn">
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
