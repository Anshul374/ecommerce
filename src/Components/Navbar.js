import React, { useState } from "react";
import "../Css/Navbar.css";
import logo from "../Images/myntralogo.png";
import profile from "../Images/account.png";
import wishlist2 from "../Images/love.png";
import bag from "../Images/shopping-bag.png";
import search from "../Images/search (2).png";
import { useNavigate } from "react-router-dom";
// import Cart from "./Cart";
// import { Link } from "react-router-dom";
// import { Navigation } from "swiper";

export default function Navbar({
  searchFunc,
  filterFunc,
  popupFunc,
  wishPopupFunc,
  showPopup,
  wishPopup,
  state,
}) {
  const { products, cart, wishlist } = state;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="nav">
        <img
          onClick={() => {
            filterFunc("");
            navigate("/");
          }}
          className="logo"
          src={logo}
          alt="logo"
        />
        <div className="options-div">
          <div className="men-div">
            <div
              className="men-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <h4 className="mb0 mt0 tcenter men option-style">MEN</h4>
              <div className="blank-div"></div>
              <div className="men-dropdown">
                <span
                  onClick={() => {
                    navigate("men/watches");
                  }}
                >
                  Watches
                </span>
                {/* <Link to="/mens/watches">Watches</Link> */}
                <span
                  onClick={() => {
                    navigate("men/shoes");
                  }}
                >
                  Shoes
                </span>
                <span
                  onClick={() => {
                    navigate("men/tshirts");
                  }}
                >
                  T-Shirts
                </span>
              </div>
            </div>
          </div>
          <div className="women-div" style={{ width: "6.5em" }}>
            <div
              className="women-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ width: "6.5em" }}
            >
              <h4 className="mb0 mt0 tcenter women option-style">WOMEN</h4>
              <div className="blank-div"></div>
              <div className="women-dropdown">
                <span
                  onClick={() => {
                    navigate("women/dresses");
                  }}
                >
                  Dresses
                </span>
                <span
                  onClick={() => {
                    navigate("women/shoes");
                  }}
                >
                  Shoes
                </span>
                <span
                  onClick={() => {
                    navigate("women/watches");
                  }}
                >
                  Watches
                </span>
                <span
                  onClick={() => {
                    navigate("women/bags");
                  }}
                >
                  Bags
                </span>
                <span
                  onClick={() => {
                    navigate("women/jewellery");
                  }}
                >
                  Jewellery
                </span>
              </div>
            </div>
          </div>
          <div className="home-living-div" style={{ width: "9em" }}>
            <div
              className="hl-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ width: "9em" }}
            >
              <h4 className="mb0 mt0 tcenter home-living option-style">
                HOME & LIVING
              </h4>
              <div className="blank-div"></div>
              <div className="home-living-dropdown">
                <span
                  onClick={() => {
                    navigate("home&living/home-decoration");
                  }}
                >
                  Home Decoration
                </span>
                <span
                  onClick={() => {
                    navigate("home&living/furniture");
                  }}
                >
                  Furniture
                </span>
                <span
                  onClick={() => {
                    navigate("home&living/groceries");
                  }}
                >
                  Groceries
                </span>
                <span
                  onClick={() => {
                    navigate("home&living/lighting");
                  }}
                >
                  Lighting
                </span>
              </div>
            </div>
          </div>
          <div className="electro-div" style={{ width: "8.5em" }}>
            <div
              className="elec-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ width: "8.5em" }}
            >
              <h4 className="mb0 mt0 tcenter electro option-style">
                ELECTRONICS
              </h4>
              <div className="blank-div"></div>
              <div className="electro-dropdown">
                <span
                  onClick={() => {
                    navigate("electronics/laptops");
                  }}
                >
                  Laptops
                </span>
                <span
                  onClick={() => {
                    navigate("electronics/smartphones");
                  }}
                >
                  Smartphones
                </span>
              </div>
            </div>
          </div>
          <div className="others-div" style={{ width: "6.2em" }}>
            <div
              className="others-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              style={{ width: "6.2em" }}
            >
              <h4 className="mb0 mt0 tcenter others option-style">OTHERS</h4>
              <div className="blank-div"></div>
              <div className="others-dropdown">
                <span
                  onClick={() => {
                    navigate("others/fragrances");
                  }}
                >
                  Fragrances
                </span>
                <span
                  onClick={() => {
                    navigate("others/skincare");
                  }}
                >
                  Skincare
                </span>
                <span
                  onClick={() => {
                    navigate("others/tops");
                  }}
                >
                  Tops
                </span>
                <span
                  onClick={() => {
                    navigate("others/automotive");
                  }}
                >
                  Automotive
                </span>
                <span
                  onClick={() => {
                    navigate("others/sunglasses");
                  }}
                >
                  Sunglasses
                </span>
                <span
                  onClick={() => {
                    navigate("others/motorcycle");
                  }}
                >
                  Motorcycle
                </span>
              </div>
            </div>
          </div>
          <div className="filter-div">
            <div
              className="filter-option"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              <h4 className="mb0 mt0 tcenter filter option-style">FILTER</h4>
              <div className="blank-div"></div>
              <div className="filter-dropdown">
                <label htmlFor="filter">Enter the price: </label>
                <input
                  type="text"
                  id="filter"
                  onChange={(e) => filterFunc(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="search-div">
          <div className="search-icon-div">
            <img src={search} alt="search" className="search" />
          </div>
          <input
            type="text"
            id="search"
            placeholder="Search for products,brands and more"
            onChange={(e) => searchFunc(e.target.value)}
          />
        </div>
        <div className="profile-wish-bag">
          <div className="profile">
            <img src={profile} alt="p" />
            <h5>Profile</h5>
          </div>
          <div
            className="wishlist"
            onClick={() => {
              wishPopupFunc(false);
              navigate("wishlist");
            }}
          >
            <img src={wishlist2} alt="w" />
            <h5>Wishlist</h5>
          </div>
          {wishlist.length !== 0 && wishPopup && (
            <div className="itemwish-popup">{wishlist.length}</div>
          )}
          <div
            className="bag"
            onClick={() => {
              popupFunc(false);
              navigate("cart");
            }}
          >
            <img src={bag} alt="b" />
            <h5>Bag</h5>
          </div>
          {showPopup && <div className="itembag-popup">{cart.length}</div>}
        </div>
      </nav>
      <div className={`${show && "backdrop"}`}></div>
    </>
  );
}
