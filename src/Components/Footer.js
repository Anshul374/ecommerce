import React from "react";
import "../Css/Footer.css";
import original from "../Images/original.png";
import ret from "../Images/return.png";
import fb from "../Images/fb.png";
import twitter from "../Images/twitter.png";
import insta from "../Images/insta.png";
import youtube from "../Images/youtube.png";

export default function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-left">
        <img src={original} alt="original" />
        <div className="footer-left-inner">
          <p>
            <strong>100% ORIGINAL</strong> guarantee
          </p>
          <p>for all products at myntra.com</p>
        </div>
      </div>
      <div className="footer-mid">
        <h5 className="mt0 mb0">KEEP IN TOUCH</h5>
        <div className="imgs-div">
          <img src={fb} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={youtube} alt="youtube" />
          <img src={insta} alt="instagram" />
        </div>
      </div>
      <div className="footer-right">
        <img src={ret} alt="return" />
        <div className="footer-right-inner">
          <p>
            <strong>Return within 30 days</strong> of
          </p>
          <p>receiving your order</p>
        </div>
      </div>
    </div>
  );
}
