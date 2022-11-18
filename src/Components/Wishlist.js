import React from "react";
import home from "../Images/home1.jpg";
import "../Css/Wishlist.css";
import cancel from "../Images/cancel.png";
import EmptyWish from "./EmptyWish";

export default function Wishlist({ state, dispatch, popupFunc }) {
  const { products, cart, wishlist } = state;
  return (
    <div className="wish-main-div">
      {wishlist.length === 0 ? (
        <EmptyWish />
      ) : (
        <>
          <div className="my-wishlist">
            <h4>My Wishlist :</h4>
            <span>{wishlist.length} items</span>
          </div>
          <div className="wish-items-div">
            {wishlist.map((witem) => {
              return (
                <div key={witem.id} className="wish-item-card">
                  <img
                    src={witem.thumbnail}
                    alt="product"
                    className="wish-item-image"
                  />
                  <div
                    className="cancel-div"
                    onClick={() => {
                      dispatch({
                        type: "Remove_From_Wishlist",
                        payload: {
                          id: witem.id,
                        },
                      });
                    }}
                  >
                    <img src={cancel} alt="cancel" className="cancel" />
                  </div>
                  <div className="name-price-div">
                    <span className="title">
                      {witem.title.length > 25
                        ? witem.title.slice(0, 23) + ".."
                        : witem.title}
                    </span>
                    <span className="description">
                      {witem.description.length > 25
                        ? witem.description.slice(0, 23) + "..."
                        : witem.description}
                    </span>
                    <div className="wish-item-price-div">
                      <span className="price">
                        {" "}
                        ₹{" "}
                        {witem.price -
                          Math.trunc(
                            witem.price *
                              (Math.trunc(witem.discountPercentage) / 100)
                          )}
                      </span>
                      <span className="original-price">₹ {witem.price}</span>
                      <span className="discount">
                        ({Math.trunc(witem.discountPercentage)}% OFF)
                      </span>
                    </div>
                  </div>
                  <button
                    className="move-to-bag-btn"
                    onClick={() => {
                      popupFunc(true);
                      cart.length === 0
                        ? dispatch({
                            type: "Add_To_Cart",
                            payload: {
                              id: witem.id,
                              title: witem.title,
                              price: witem.price,
                              description: witem.description,
                              stock: witem.stock,
                              rating: witem.rating,
                              qty: 1,
                              discountPercentage: witem.discountPercentage,
                              thumbnail: witem.thumbnail,
                            },
                          })
                        : cart.some((itemc) => {
                            return itemc.id === witem.id;
                          })
                        ? cart.some((itemc) => {
                            return (
                              itemc.id === witem.id &&
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
                              id: witem.id,
                              title: witem.title,
                              price: witem.price,
                              description: witem.description,
                              stock: witem.stock,
                              rating: witem.rating,
                              qty: 1,
                              discountPercentage: witem.discountPercentage,
                              thumbnail: witem.thumbnail,
                            },
                          });
                    }}
                  >
                    MOVE TO BAG
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
