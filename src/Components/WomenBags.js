import React from "react";
import "../Css/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeart } from "@fortawesome/free-solid-svg-icons";
import wishlist1 from "../Images/love.png";

export default function WomenBags({
  popupFunc,
  wishPopupFunc,
  state,
  dispatch,
  filter,
  search,
  category1,
}) {
  const { products, cart, wishlist } = state;
  return (
    <>
      <div className="products-div">
        {filter === ""
          ? products.map((item) => {
              return (
                item.category === "womens-bags" && (
                  <div key={item.id} className="item-card">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="item-image"
                    />
                    <div className="bag-wish-btn-div">
                      <div className="bag-wish-btn">
                        <button
                          className={`add-cart-btn`}
                          onClick={() => {
                            popupFunc(true);
                            cart.length === 0
                              ? dispatch({
                                  type: "Add_To_Cart",
                                  payload: {
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    description: item.description,
                                    stock: item.stock,
                                    rating: item.rating,
                                    qty: 1,
                                    discountPercentage: item.discountPercentage,
                                    thumbnail: item.thumbnail,
                                  },
                                })
                              : cart.some((itemc) => {
                                  return itemc.id === item.id;
                                })
                              ? cart.some((itemc) => {
                                  return (
                                    itemc.id === item.id &&
                                    dispatch({
                                      type: "Change_Quantity",
                                      payload: {
                                        id: itemc.id,
                                        qty: itemc.qty + 1,
                                      },
                                    })
                                  );
                                })
                              : dispatch({
                                  type: "Add_To_Cart",
                                  payload: {
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    description: item.description,
                                    stock: item.stock,
                                    rating: item.rating,
                                    qty: 1,
                                    discountPercentage: item.discountPercentage,
                                    thumbnail: item.thumbnail,
                                  },
                                });
                          }}
                        >
                          ADD TO BAG
                        </button>
                        {wishlist.some((w) => w.id === item.id) ? (
                          <button
                            className="wished-btn"
                            onClick={() => {
                              wishPopupFunc(true);
                              dispatch({
                                type: "Remove_From_Wishlist",
                                payload: {
                                  id: item.id,
                                },
                              });
                            }}
                          >
                            {/* <img src={wishlist1} alt="" /> */}
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="wished-heart"
                            ></FontAwesomeIcon>
                            WISHLISTED
                          </button>
                        ) : (
                          <button
                            className="wish-btn"
                            onClick={() => {
                              wishPopupFunc(true);
                              dispatch({
                                type: "Add_To_Wishlist",
                                payload: {
                                  id: item.id,
                                  title: item.title,
                                  price: item.price,
                                  description: item.description,
                                  stock: item.stock,
                                  rating: item.rating,
                                  qty: 1,
                                  discountPercentage: item.discountPercentage,
                                  thumbnail: item.thumbnail,
                                },
                              });
                            }}
                          >
                            <img src={wishlist1} alt="" />
                            WISHLIST
                          </button>
                        )}
                        <span className="stock">Stock : {item.stock}</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="sRating">{item.rating.toFixed(1)}</span>
                      <FontAwesomeIcon
                        style={{
                          color: "#319DA0",
                          position: "relative",
                          top: "0.29rem",
                        }}
                        icon={faStar}
                        className="fa-1x"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="name-price">
                      <span className="title">
                        {item.title.length > 29
                          ? item.title.slice(0, 26) + ".."
                          : item.title}
                      </span>
                      <span className="description">
                        {item.description.length > 30
                          ? item.description.slice(0, 30) + "..."
                          : item.description}
                      </span>
                      <div className="price-disc">
                        <span className="price">
                          ₹{" "}
                          {item.price -
                            Math.trunc(
                              item.price *
                                (Math.trunc(item.discountPercentage) / 100)
                            )}
                        </span>
                        <span className="original-price">₹ {item.price}</span>
                        <span className="discount">
                          ({Math.trunc(item.discountPercentage)}% OFF)
                        </span>
                      </div>
                    </div>
                  </div>
                )
              );
            })
          : products.map((item) => {
              return (
                item.price < parseInt(filter) && (
                  <div key={item.id} className="item-card">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="item-image"
                    />
                    <div className="bag-wish-btn-div">
                      <div className="bag-wish-btn">
                        <button
                          className="add-cart-btn"
                          onClick={() => {
                            popupFunc(true);
                            cart.length === 0
                              ? dispatch({
                                  type: "Add_To_Cart",
                                  payload: {
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    description: item.description,
                                    stock: item.stock,
                                    rating: item.rating,
                                    qty: 1,
                                    discountPercentage: item.discountPercentage,
                                    thumbnail: item.thumbnail,
                                  },
                                })
                              : cart.some((itemc) => {
                                  return itemc.id === item.id;
                                })
                              ? cart.some((itemc) => {
                                  return (
                                    itemc.id === item.id &&
                                    dispatch({
                                      type: "Change_Quantity",
                                      payload: {
                                        id: itemc.id,
                                        qty: itemc.qty + 1,
                                      },
                                    })
                                  );
                                })
                              : dispatch({
                                  type: "Add_To_Cart",
                                  payload: {
                                    id: item.id,
                                    title: item.title,
                                    price: item.price,
                                    description: item.description,
                                    stock: item.stock,
                                    rating: item.rating,
                                    qty: 1,
                                    discountPercentage: item.discountPercentage,
                                    thumbnail: item.thumbnail,
                                  },
                                });
                          }}
                        >
                          ADD TO BAG
                        </button>
                        {wishlist.some((w) => w.id === item.id) ? (
                          <button
                            className="wished-btn"
                            onClick={() => {
                              wishPopupFunc(true);
                              dispatch({
                                type: "Remove_From_Wishlist",
                                payload: {
                                  id: item.id,
                                },
                              });
                            }}
                          >
                            {/* <img src={wishlist1} alt="" /> */}
                            <FontAwesomeIcon
                              icon={faHeart}
                              className="wished-heart"
                            ></FontAwesomeIcon>
                            WISHLISTED
                          </button>
                        ) : (
                          <button
                            className="wish-btn"
                            onClick={() => {
                              wishPopupFunc(true);
                              dispatch({
                                type: "Add_To_Wishlist",
                                payload: {
                                  id: item.id,
                                  title: item.title,
                                  price: item.price,
                                  description: item.description,
                                  stock: item.stock,
                                  rating: item.rating,
                                  discountPercentage: item.discountPercentage,
                                  thumbnail: item.thumbnail,
                                },
                              });
                            }}
                          >
                            <img src={wishlist1} alt="" />
                            WISHLIST
                          </button>
                        )}
                        <span className="stock">Stock : {item.stock}</span>
                      </div>
                    </div>
                    <div className="rating">
                      <span className="sRating">{item.rating.toFixed(1)}</span>
                      <FontAwesomeIcon
                        style={{
                          color: "#319DA0",
                          position: "relative",
                          top: "0.29rem",
                        }}
                        icon={faStar}
                        className="fa-0.5x"
                      ></FontAwesomeIcon>
                    </div>
                    <div className="name-price">
                      <span className="title">
                        {item.title.length > 29
                          ? item.title.slice(0, 26) + ".."
                          : item.title}
                      </span>
                      <span className="description">
                        {item.description.length > 30
                          ? item.description.slice(0, 30) + "..."
                          : item.description}
                      </span>
                      <div className="price-disc">
                        <span className="price">
                          ₹{" "}
                          {item.price -
                            Math.trunc(
                              item.price * (item.discountPercentage / 100)
                            )}
                        </span>
                        <span className="original-price">₹ {item.price}</span>
                        <span className="discount">
                          ({Math.trunc(item.discountPercentage)}% OFF)
                        </span>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
      </div>
    </>
  );
}
