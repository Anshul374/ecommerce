import React from "react";
import CartLeft from "./CartLeft";
import "../Css/Cart.css";
import CartRight from "./CartRight";
import EmptyCart from "./EmptyCart";

export default function Cart({ state, dispatch }) {
  const { products, cart, wishlist } = state;
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="cart-div">
          <CartLeft products={products} cart={cart} dispatch={dispatch} />
          <CartRight cart={cart} />
        </div>
      )}
    </>
  );
}

// {cart.length === 0 ? (
//   <p>Cart is Empty!!</p>
// ) : (
//   cart.map((cItem) => {
//     return (
//       <div key={cItem.id} className="cart-item">
//         <img
//           className="cart-item-img"
//           src={cItem.thumbnail}
//           alt={cItem.title}
//         />
//         <div className="cart-price-title">
//           <span>{cItem.title}</span>
//           <span>Rs{cItem.price}</span>
//         </div>
//         <div className="number-of-items">
//           <span style={{ marginRight: "0.5rem" }}>1</span>
//           <button>-</button>
//         </div>
//       </div>
//     );
//   })
// )}
