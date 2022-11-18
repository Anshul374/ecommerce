import React from "react";
import { useNavigate } from "react-router-dom";
import emptybag from "../Images/empty-bag.png";
import "../Css/EmptyCart.css";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <div className="empty-cart">
      <img src={emptybag} alt="emptybag" />
      <h3>Hey, it feels so light!</h3>
      <p>There is nothing in your bag. Let's add some items.</p>
      <button onClick={() => navigate("/wishlist")}>
        ADD ITEMS FROM WISHLIST
      </button>
    </div>
  );
}
