import React from "react";
import gift from "../Images/gift-big.png";
import tag from "../Images/tag.png";
import "../Css/CartRight.css";
import "../Css/Navbar.css";
import Cart from "./Cart";

export default function CartRight({ cart }) {
  let b = 0;
  let c = 0;
  return (
    <div className="cart-right-div">
      <div className="coupon-gift-div">
        <h6 className="mb0 faded-heading">DONATE FOR COVID-19 RELIEF</h6>
        <div className="covid-relief-div">
          <div className="checkbox-div">
            <input type="checkbox" id="covid" />
            <label
              htmlFor="covid"
              style={{
                fontSize: "0.85rem",
                fontWeight: "550",
                color: "#2f2e2e",
              }}
            >
              Help India fight COVID-19
            </label>
          </div>
          <div className="covid-rupees">
            <span>₹10</span>
            <span>₹50</span>
            <span>₹100</span>
            <span>Other</span>
          </div>
          <span className="know-more">Know More</span>
        </div>
        <h5 className="faded-heading" style={{ margin: "0.7rem 0" }}>
          COUPONS
        </h5>
        <div className="apply-coupon-div">
          <img src={tag} alt="tag" />
          <div className="apply-coupon-off-div">
            <div className="apply-coupon">
              Apply Coupons
              <button className="apply-button">APPLY</button>
            </div>
            <div className="off-first-order">
              <span>Login</span>{" "}
              <p className="mt0 mb0">to get upto Rs.300 OFF on first order</p>
            </div>
          </div>
        </div>
        <h5 className="faded-heading" style={{ margin: "0.6rem 0 0.7rem" }}>
          GIFTING & PERSONALIZATION
        </h5>
        <div className="gift-wrap-div">
          <img src={gift} alt="home" />
          <div className="gift-wrap">
            <div className="loved-one">
              <h5>Buying for a loved one?</h5>
              <p>Gift wrap and personalised message on card,</p>
              <span className="only25">Only for Rs.25</span>
            </div>
            <span className="add-gift-wrap">ADD GIFT WRAP</span>
          </div>
        </div>
      </div>
      <div className="total-amount">
        <h5 className="mb0 faded-heading" style={{ marginTop: "0.7em" }}>
          PRICE DETAILS (1 Item)
        </h5>
        <div className="total-mrp">
          <span className="faded-span">Total MRP</span>
          <span style={{ fontSize: "0.85rem", fontWeight: "450" }}>
            {cart.forEach((item) => {
              item.qty > 1
                ? (b = b + item.price * item.qty)
                : (b = b + item.price);
            })}{" "}
            ₹ {b}
          </span>
        </div>
        <div className="discount-on-mrp">
          <span className="faded-span">Discount on MRP</span>
          <span
            style={{ fontSize: "0.85rem", fontWeight: "450", color: "green" }}
          >
            {cart.forEach((item) => {
              item.qty > 1
                ? (c =
                    c +
                    (item.price -
                      (item.price -
                        Math.trunc(
                          item.price *
                            (Math.trunc(item.discountPercentage) / 100)
                        ))) *
                      item.qty)
                : (c =
                    c +
                    (item.price -
                      (item.price -
                        Math.trunc(
                          item.price *
                            (Math.trunc(item.discountPercentage) / 100)
                        ))));
            })}{" "}
            ₹ {c}
          </span>
        </div>
        <div className="coupon-discount">
          <span className="faded-span">Coupon Discount</span>
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: "450",
              color: "#EC7272",
              cursor: "pointer",
            }}
          >
            Apply Coupon
          </span>
        </div>
        <div className="conv-fee">
          <span className="faded-span">Convenience Fee</span>
          <div className="conv-fee-right">
            <span className="convInner-fee">Rs.99 </span>
            <span className="conv-free">Free</span>
          </div>
        </div>
        <div className="total-amount-last">
          <span>Total Amount</span>
          <span>₹ {b - c}</span>
        </div>
      </div>
      <button className="place-order-btn">PLACE ORDER</button>
    </div>
  );
}
