import React, { useEffect, useReducer, useState } from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Products from "./Products";
import "../Css/Main.css";
import "../Css/Navbar.css";
import axios from "axios";
import { reducer } from "./reducer";
import Carousels from "./Carousels";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./Wishlist";
import MenWatches from "./MenWatches";
import MenShoes from "./MenShoes";
import MenTshirts from "./MenTshirts";
import WomenDress from "./WomenDress";
import WomenShirts from "./WomenShirts";
import WomenWatch from "./WomenWatch";
import WomenBags from "./WomenBags";
import WomenJewel from "./WomenJewel";
import WomenShoes from "./WomenShoes";
import HomeDecor from "./HomeDecor";
import Furniture from "./Furniture";
import Lighting from "./Lighting";
import Laptops from "./Laptops";
import Smartphones from "./Smartphones";
import Fragrances from "./Fragrances";
import Tops from "./Tops";
import Skincare from "./Skincare";
import Automotive from "./Automotive";
import Motorcycle from "./Motorcycle";
import Sunglasses from "./Sunglasses";
import Groceries from "./Groceries";

export default function Main() {
  const [filter, setFilter] = useState("");
  // const [category1, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [wishPopup, setWishPopup] = useState(false);

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: [],
    wishlist: [],
  });
  console.log(state);
  // const categoryFunc = (cValue) => {
  //   setCategory(cValue);
  // };
  const filterFunc = (value) => {
    setFilter(value);
  };
  const searchFunc = (value) => {
    setSearch(value);
  };
  const popupFunc = (value) => {
    setShowPopup(value);
  };
  const wishpopupFunc = (value) => {
    setWishPopup(value);
  };
  // console.log(category1);
  useEffect(() => {
    // category1 === "" ?
    axios
      .get(`https://dummyjson.com/products?limit=100`)
      .then((response) => {
        dispatch({
          type: "Add_Products",
          payload: response.data.products,
        });
        console.log(response.data.products);
      })
      .catch((error) => console.log(error));
    // : axios
    //     .get(`https://dummyjson.com/products/category/${category1}?limit=100`)
    //     .then((response) => {
    //       dispatch({
    //         type: "Add_Products",
    //         payload: response.data.products,
    //       });
    //       console.log(response.data.products);
    //     })
    //     .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Navbar
        filterFunc={filterFunc}
        // categoryFunc={categoryFunc}
        popupFunc={popupFunc}
        showPopup={showPopup}
        wishPopupFunc={wishpopupFunc}
        wishPopup={wishPopup}
        state={state}
      />
      <div className="main-div">
        {/* men section */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousels />
                <Products
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="men/watches"
            element={
              <>
                <Carousels />
                <MenWatches
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="men/shoes"
            element={
              <>
                <Carousels />
                <MenShoes
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="men/tshirts"
            element={
              <>
                <Carousels />
                <MenTshirts
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/dresses"
            element={
              <>
                <Carousels />
                <WomenDress
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/shirts"
            element={
              <>
                <Carousels />
                <WomenShirts
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/watches"
            element={
              <>
                <Carousels />
                <WomenWatch
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/bags"
            element={
              <>
                <Carousels />
                <WomenBags
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/jewellery"
            element={
              <>
                <Carousels />
                <WomenJewel
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="women/shoes"
            element={
              <>
                <Carousels />
                <WomenShoes
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="home&living/home-decoration"
            element={
              <>
                <Carousels />
                <HomeDecor
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="home&living/furniture"
            element={
              <>
                <Carousels />
                <Furniture
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="home&living/groceries"
            element={
              <>
                <Carousels />
                <Groceries
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="home&living/lighting"
            element={
              <>
                <Carousels />
                <Lighting
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="electronics/laptops"
            element={
              <>
                <Carousels />
                <Laptops
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="electronics/smartphones"
            element={
              <>
                <Carousels />
                <Smartphones
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/fragrances"
            element={
              <>
                <Carousels />
                <Fragrances
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/tops"
            element={
              <>
                <Carousels />
                <Tops
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/skincare"
            element={
              <>
                <Carousels />
                <Skincare
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/automotive"
            element={
              <>
                <Carousels />
                <Automotive
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/motorcycle"
            element={
              <>
                <Carousels />
                <Motorcycle
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="others/sunglasses"
            element={
              <>
                <Carousels />
                <Sunglasses
                  state={state}
                  dispatch={dispatch}
                  filter={filter}
                  popupFunc={popupFunc}
                  wishPopupFunc={wishpopupFunc}
                  search={search}
                />
              </>
            }
          />
          <Route
            path="wishlist"
            element={
              <Wishlist
                state={state}
                dispatch={dispatch}
                popupFunc={popupFunc}
              />
            }
          />
          <Route
            exact
            path="cart"
            element={<Cart state={state} dispatch={dispatch} />}
          />
        </Routes>
        {/* <Cart state={state} dispatch={dispatch} /> */}
      </div>
      <Footer />
    </>
  );
}
