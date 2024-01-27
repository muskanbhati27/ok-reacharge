import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";

const Navbar = () => {
  function OpenNav() {
    // alert("open");
    // document.getElementsByClassName("mobile_menu").display = "block";
    document.getElementsByClassName("mobile_menu").style.display = "block";
  }
  function closeNav() {
    // alert("close");
    document.getElementsByClassName("mobile_menu").display = "block";
  }
  const images = [
    "/images/banner-5.jpg",
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
  ];
  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle automatic image change
  const changeImage = () => {
    // Update the current image index
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to trigger automatic image change at a specific interval
  useEffect(() => {
    const intervalId = setInterval(changeImage, 4000); // Change image every 5 seconds (adjust as needed)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <>
      <div class="header" id="home">
        <div className="header_menu_sec">
          <div className="mobile_menu">
            <div className="close_container">
              <span className="close_button" onClick={closeNav}>
                X
              </span>
            </div>
            <div className="header_logo_sec mobile_logo">
              <a href="#">
                <img src="images\logo.png" alt="logo" />
                <span className="recharge_title">Recharge</span>
              </a>
            </div>
            <ul className="p-0 m-0 d-flex align-items-center header_menu_ul">
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
        <div class="container">
          <div class="header_sec d-flex justify-content-between align-items-center">
            <div class="header_logo_sec">
              <a href="#">
                <img src="images\logo.png" alt="logo" />
                <span class="recharge_title">Recharge</span>
              </a>
            </div>
            <div class="header_menu_sec">
              <div class="mobile_ul">
                <span class="close_icon">X</span>
                <div class="header_logo_sec mobile_logo">
                  <a href="#">
                    <img src="images\logo.png" alt="logo" />
                    <span class="recharge_title">Recharge</span>
                  </a>
                </div>
                <ul class="p-0 m-0 d-flex align-items-center header_menu_ul">
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
              <span class="mob_menu_icon">
                <i class="fas fa-bars" onClick={OpenNav}></i>
                {/* <i class="fa fa-bars" aria-hidden="true"></i> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="banner_sec" id="home">
        <div class="banner_slider owl-carousel owl-theme">
          <div class="item">
            <div class="banner_slider_box">
              <div class="banner_item_img">
                <img
                  src={images[currentImageIndex]}
                  alt={`Image ${currentImageIndex + 1}`}
                />
              </div>
              <div class="banner_content_sec">
                <div class="container">
                  <span class="top_heading">Welcome to</span>
                  <h1>OK RECHARGE</h1>
                  <p>
                    OK RECHARGE One of the fastest growing names in Indian
                    Recharge industry that isrecognized for providing the <br />
                    best Recharge services at High success Ratio.
                  </p>
                  <div class="banner_btn_sec mt-4">
                    <a href="#contact" class="site_btn white_hover">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
