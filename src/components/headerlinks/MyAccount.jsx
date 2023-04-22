import React, { useState } from "react";
// import "./checkout.css";
import "./myaccount.css";

const MyAccount = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handlePlaceOrder = () => {
    // Handle placing order logic here

    // Reset all state variables to their initial empty values
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">My Account</h1>
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
          <label htmlFor="currentpassword" className="form-label">
            Current Password:
          </label>
          <input
            type="text"
            id="currentpassword"
            className="form-input"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <label htmlFor="newpassword" className="form-label">
            New Passsword:
          </label>
          <input
            type="text"
            id="newpassword"
            className="form-input"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
      </div>

      <button onClick={handlePlaceOrder} className="save-changes">
        Save Changes
      </button>
    </div>
  );
};

export default MyAccount;
