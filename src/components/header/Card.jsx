import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import product from "../../assets/data/data";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";
import "./card.css";

export const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const closeCard = () => {
    setCardOpen(null);
  };

  const quantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.itemsList);

  //total
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <>
      <div className="card" onClick={() => setCardOpen(!cardOpen)}>
        <BiShoppingBag className="shoppingIcon" />
        <span className="flexCenter">{quantity}</span>
      </div>
      <div className={cardOpen ? "overlay" : "nonoverlay"}></div>

      <div className={cardOpen ? "cartItem" : "cardhide"}>
        {cardOpen && (
          <div className="title flex">
            <h2>Shopping Cart</h2>
            <button className="closeButton" onClick={closeCard}>
              <AiOutlineClose className="icon" />
            </button>
          </div>
        )}
        {cartItems.map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        {cardOpen && (
          <div className="checkOut">
            <button>
              <span>Priceed To Checkout</span>
              <label htmlFor="">${total}</label>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;

// import React, { useState } from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { BiShoppingBag } from "react-icons/bi";
// import CartItems from "./CartItems";
// import { product } from "../../assets/data/data";
// import "./card.css";
// import { useSelector } from "react-redux";

// const Card = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartOpen, setCartOpen] = useState(false);

//   const openCart = () => {
//     setCartOpen(true);
//   };

//   const closeCart = () => {
//     setCartOpen(false);
//   };

//   const addToCart = (item) => {
//     setCartItems([...cartItems, item]);
//   };

//   const removeFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const quantity = useSelector((state) => state.cart.totalQunatity);
//   const cartItem = useSelector((state) => state.cart.itemsList);

//   const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
//   return (
//     <div className="cardContainer">
//       <div className="card" onClick={openCart}>
//         <BiShoppingBag className="ShoppingIcon" />
//         <span className="flexCenter">{cartItems.length}</span>
//         {/* <span className="flexCenter">{quantity}</span> */}
//       </div>
//       {cartOpen && (
//         <div className="cartOverlay" onClick={closeCart}>
//           <div className="cart">
//             <div className="cartHeader">
//               <h2>Shopping Cart</h2>
//               <button className="closeButton" onClick={closeCart}>
//                 <AiOutlineClose />
//               </button>
//             </div>
//             {product.slice(0, 1).map((item) => (
//               <CartItems
//                 id={item.id}
//                 cover={item.cover}
//                 name={item.name}
//                 price={item.price}
//                 quantity={item.quantity}
//                 totalPrice={item.totalPrice}
//               />
//             ))}
//             <div className="cartFooter">
//               <p>Total: {cartTotal}</p>
//               <button>Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;
