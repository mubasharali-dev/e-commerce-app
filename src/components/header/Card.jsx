// import React, { useState } from "react";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsX } from "react-icons/bs";
// // import "./App.css";

// function App() {
//   const [cartOpen, setCartOpen] = useState(false);

//   const handleCartOpen = () => {
//     setCartOpen(true);
//   };

//   const handleCartClose = () => {
//     setCartOpen(false);
//   };

//   return (
//     <div className="App">
//       <header className="header">
//         <div className="basket-icon" onClick={handleCartOpen}>
//           <AiOutlineShoppingCart />
//         </div>
//         <div className="title">{/* <h1>My E-commerce App</h1> */}</div>
//       </header>
//       {cartOpen && (
//         <div className="cart-container">
//           <div className="cart-header">
//             <h2>Shopping Cart</h2>
//             <div className="close-icon" onClick={handleCartClose}>
//               <BsX />
//             </div>
//           </div>
//           <div className="cart-content">
//             {/* Your cart items and checkout form here */}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import "./card.css";

const Card = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cardContainer">
      <div className="card" onClick={openCart}>
        <BiShoppingBag className="ShoppingIcon" />
        <span className="flexCenter">{cartItems.length}</span>
      </div>
      {cartOpen && (
        <div className="cartOverlay" onClick={closeCart}>
          <div className="cart">
            <div className="cartHeader">
              <h2>Shopping Cart</h2>
              <button className="closeButton" onClick={closeCart}>
                <AiOutlineClose />
              </button>
            </div>
            <div className="cartItems">
              {cartItems.map((item, index) => (
                <div key={index} className="cartItem">
                  <div className="itemImage">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="itemDetails">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cartFooter">
              <p>Total: {cartTotal}</p>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
