import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer_inner_sec row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer_box">
                <div className="footer_logo">
                  <img src="images\logo.png" alt="logo" />
                </div>
                <span className="footer_abt_title">
                  <b>About Us</b>
                </span>
                <p className="footer-about mb-0">
                  OkRecharge Provide Mobile Recharge (Airtel,Jio,Vodafone,Idea)
                  with cashback feature upto 3% for every user.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box footer_pad footer_link">
                <h3 className="footer_top_heading">Useful Links</h3>
                <ul className="m-0 p-0">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="footer_box footer_link">
                <h3 className="footer_top_heading">Our Services</h3>
                <ul className="m-0 p-0">
                  <li>
                    <a href="#services">Mobile Recharge</a>
                  </li>
                  <li>
                    <a href="#services">TV/DTH Recharge</a>
                  </li>
                  <li>
                    <a href="#services">Distributor/Retailer</a>
                  </li>
                  <li>
                    <a href="#services">Reseller APIs</a>
                  </li>
                  <li>
                    <a href="#services">BBPS</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="footer_box">
                <h3 className="footer_top_heading">Contact Us</h3>
                <ul className="p-0 m-0">
                  <li className="d-flex flex-wrap">
                    <span className="txts">
                      <b>Address: </b>{" "}
                    </span>
                    <span className="address_span">
                      Suresh Mandawaliya Khachrod, Dist. Ujjain Pincode : 456224
                    </span>
                  </li>
                  <li className="d-flex flex-wrap">
                    <span>
                      <b>Phone:</b>{" "}
                    </span>
                    <span className="address_span">
                      <a href="tel:9165292401">9165292401</a>
                    </span>
                  </li>
                  <li className="d-flex flex-wrap">
                    <span>
                      <b>Email:</b>
                    </span>
                    <span className="address_span">
                      <a href="mailto:sureshmandavaliya@gmail.com">
                        sureshmandavaliya@gmail.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bottom_sec ">
          <p>
            @2023 <a href="index.html">OkRecharge</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
