import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cartSlice";
import "./cartitems.css";

export const CartItems = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();

  const incCartitems = () => {
    dispatch(cartActions.addToCart({ id, name, price }));
  };
  const descCartitems = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <>
      <div className="cardList" key={id}>
        <div className="cartContent">
          <div className="details">
            <p>{name}</p>
            <label htmlFor="">Unit Price: ${price}</label>

            <div className="price">
              <div className="qty flexCenter">
                <button className="plus" onClick={incCartitems}>
                  <AiOutlinePlus />
                </button>
                <button className="num">{quantity}</button>
                <button className="minus" onClick={descCartitems}>
                  <AiOutlineMinus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItems;

// import React from "react";
// import { AiOutlineClose } from "react-icons/ai";
// import { product } from "../../assets/data/data";
// import product1 from "../../assets/images/product1.jpg";
// import product2 from "../../assets/images/product2.jpg";
// import "./cartitems.css";

// const CartItems = ({ id, cover, name, price, quantity, totalPrice }) => {
//   return (
//     <div>
//       <div className="cardList">
//         <div className="cardContent">
//           {id === 1 && (
//             <div className="product">
//               <img src={product1} alt="" className="productImage" />
//               <div className="productDetails">
//                 <h3 className="productName">{name}</h3>
//                 <label className="productPrice">Unit Price ${price}</label>
//               </div>
//             </div>
//           )}
//           {id === 1 && (
//             <div className="product">
//               <img src={product2} alt="" className="productImage" />
//               <div className="productDetails">
//                 <h3 className="productName">{name}</h3>
//                 <label className="productPrice">Unit Price ${price}</label>
//               </div>
//             </div>
//           )}
//           {/* <div className="totalPrice">${totalPrice}</div> */}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CartItems;
