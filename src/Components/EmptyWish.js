import React from "react";
import { useNavigate } from "react-router-dom";
import emptyw from "../Images/empty.jpg";
import "../Css/EmptyWish.css";

export default function EmptyWish() {
  const navigate = useNavigate();
  return (
    <div className="empty-div">
      <h3>YOUR WISHLIST IS EMPTY</h3>
      <p>
        Add items that you like to your wishlist.Review them anytime and easily
        move them to the bag
      </p>
      <img src={emptyw} alt="empty-wishlist" />
      <button onClick={() => navigate("/")}>CONTINUE SHOPPING</button>
    </div>
  );
}
