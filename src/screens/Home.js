import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";

import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import About from "../screens/about";
import Services from "../screens/services";
import Gallary from "../screens/gallary";
import Contact from "../screens/contact";

const Home = () => {
  // Define an array of image URLs
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
      <Navbar />

      <About />

      <Services />
      <Gallary />
      <Contact />

      <Footer />
      <div className="floating_btn">
        <a target="_blank" href="https://wa.me/">
          <div className="contact_icon">
            <i className="fab fa-whatsapp"></i>
          </div>
        </a>
      </div>
      <div className="social_icons_wrap">
        <ul className="p-0 m-0">
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
