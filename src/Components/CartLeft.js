import React, { useState } from "react";
import "../Css/CartLeft.css";
import discount from "../Images/discount.png";
import truck from "../Images/delivery.png";
import home from "../Images/home1.jpg";
import xmark from "../Images/cancel.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart";

export default function CartLeft({ products, cart, dispatch }) {
  const [toggle, setToggle] = useState(false);
  const showFunc = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <div className="cart-left-div">
      <div className="pin-div">
        <h5>Check delivery time and services</h5>
        <button className="pin-btn">ENTER PIN CODE</button>
      </div>
      <div className="offers-div">
        <div className="offers-div-heading">
          <img src={discount} alt="discount-img" />
          <h5 className="mt0 mb0" style={{ cursor: "context-menu" }}>
            Available Offers
          </h5>
        </div>
        <div className="different-offers">
          <ul className="mb0 mt0" style={{ paddingLeft: "1em" }}>
            <li className="li-styling">
              5% Unlimited Cashback on Flipkart Axis Bank Credit Card.TCA
            </li>
          </ul>
          <button
            className={`show-more ${toggle && "none"}`}
            onClick={showFunc}
          >
            Show More
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </button>
          {toggle && (
            <>
              <ul className="mt0 additional-ul" style={{ paddingLeft: "1em" }}>
                <li className="li-styling">
                  10% Cashback upto Rs 150 on Ola Money Postpaid or wallet
                  transaction on a min spend Rs 1000.TCA
                </li>
                <li className="li-styling">
                  10% Cashback upto Rs 150 on Freecharge Paylater
                  transaction.TCA
                </li>
                <li className="li-styling">
                  5% Cashback upto Rs 100 on a minimum spend of Rs 1,500 with
                  PayZapp.TCA
                </li>
              </ul>
              <button className={`show-more`} onClick={showFunc}>
                Show Less
                <FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="conv-free-truck">
        <img src={truck} alt="truck" />
        <p>
          Yay! <strong>No convenience fee</strong> on this order
        </p>
      </div>
      {/* <div className="items-selected">
        <div className="is-left">
          <input type="checkbox" />
          <h5>0/3 ITEMS SELECTED</h5>
        </div>
        <div className="is-right">
          <p style={{ borderRight: "0.01px solid #efe9e9" }}>REMOVE</p>
          <p>MOVE TO WISHLIST</p>
        </div>
      </div> */}

      <div className="cart-items-div">
        {cart.map((cItem) => {
          return (
            <div key={cItem.id} className="cart-item-div">
              <div className="cart-item">
                <img
                  className="cancel-btn"
                  src={xmark}
                  alt="xmark"
                  onClick={() => {
                    dispatch({
                      type: "Remove_From_Cart",
                      payload: {
                        id: cItem.id,
                      },
                    });
                  }}
                />
                <img
                  src={cItem.thumbnail}
                  alt={cItem.title}
                  className="item-img"
                />
                <div className="cart-item-info">
                  <h5 className="mt0 title">{cItem.title}</h5>
                  <p className="desc">
                    {cItem.description.length > 60
                      ? cItem.description.slice(0, 60) + "..."
                      : cItem.description}
                  </p>
                  <span className="qty-btn">
                    Qty:{cItem.qty}
                    <span className="inner-qty-btn">
                      <button
                        className="plus-btn"
                        onClick={() => {
                          dispatch({
                            type: "Change_Quantity",
                            payload: {
                              id: cItem.id,
                              qty: cItem.qty + 1,
                            },
                          });
                        }}
                      >
                        +
                      </button>
                      <button
                        className="minus-btn"
                        onClick={() => {
                          dispatch({
                            type: "Change_Quantity",
                            payload: {
                              id: cItem.id,
                              qty: cItem.qty - 1,
                            },
                          });
                        }}
                      >
                        -
                      </button>
                    </span>
                  </span>
                  <p className="cart-item-stock">Stock : {cItem.stock}</p>
                  <div className="price-discount-off">
                    <span className="cart-item-price">
                      ₹{" "}
                      {cItem.qty > 1
                        ? cItem.price * cItem.qty -
                          Math.trunc(
                            cItem.price *
                              (Math.trunc(cItem.discountPercentage) / 100)
                          ) *
                            cItem.qty
                        : cItem.price -
                          Math.trunc(
                            cItem.price *
                              (Math.trunc(cItem.discountPercentage) / 100)
                          )}
                    </span>
                    <span className="cart-item-originalp">
                      ₹ {cItem.qty > 1 ? cItem.price * cItem.qty : cItem.price}
                    </span>
                    <span className="cart-item-off">
                      ({Math.trunc(cItem.discountPercentage)}% OFF)
                    </span>
                  </div>
                  <span className="cart-item-rating">
                    {cItem.rating.toFixed(1)}{" "}
                    <FontAwesomeIcon
                      icon={faStar}
                      className="fa-0.5x"
                      style={{ color: "#EC7272" }}
                    ></FontAwesomeIcon>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
