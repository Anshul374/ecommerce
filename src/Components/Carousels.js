import React, { useEffect } from "react";
import "../Css/Carousel.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";

export default function Carousels({ categoryFunc }) {
  const navigate = useNavigate();
  return (
    <div className="carousel-div">
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-1"
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Image One"
            onClick={() => {
              navigate("/home&living/furniture");
            }}
          />
          <Carousel.Caption>
            <h3
              className="h-3"
              onClick={() => {
                navigate("/home&living/furniture");
              }}
            >
              FURNITURE
            </h3>
            <p className="para">Min. 10% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-2"
            src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1798&q=80"
            alt="Image Two"
            onClick={() => {
              navigate("/others/tops");
            }}
          />
          <Carousel.Caption>
            <h3
              className="h-3"
              onClick={() => {
                navigate("/others/tops");
              }}
            >
              TOPS
            </h3>
            <p className="para">Min. 15% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-3"
            src="https://images.unsplash.com/photo-1573148195900-7845dcb9b127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1940&q=80"
            alt="Image Two"
            onClick={() => {
              navigate("/electronics/smartphones");
            }}
          />
          <Carousel.Caption>
            <h3
              className="h-3"
              onClick={() => {
                navigate("/electronics/smartphones");
              }}
            >
              SMARTPHONES
            </h3>
            <p className="para">Min. 20% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-4"
            src="https://images.unsplash.com/photo-1491336238524-c990bd671778?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Image Two"
            onClick={() => {
              navigate("/electronics/laptops");
            }}
          />
          <Carousel.Caption>
            <h3
              className="h-3"
              onClick={() => {
                navigate("/electronics/laptops");
              }}
            >
              LAPTOPS
            </h3>
            <p className="para">Min. 10% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-5"
            src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3 className="h-3">SWEATSHIRTS</h3>
            <p className="para">Min. 25% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100 img-6"
            src="https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Image Two"
            onClick={() => {
              navigate("/men/tshirts");
            }}
          />
          <Carousel.Caption>
            <h3
              className="h-3"
              onClick={() => {
                navigate("/men/tshirts");
              }}
            >
              T-SHIRTS
            </h3>
            <p className="para">Min. 30% OFF</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
