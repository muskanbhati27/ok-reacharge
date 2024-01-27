import React from "react";
import "./gallary.css";
export default function gallary() {
  return (
    <>
      <di className="gallery_sec" id="gallery">
        <div className="container">
          <div className="gallery_slider_sec">
            <div className="services_heading_sec mb-5">
              <span className="top_heading">Gallery</span>
              <h3 className="headings">App Screenshots</h3>
            </div>
            <div className="gallery_slider_inner_sec text-center">
              <div className="gallery_slider owl-carousel owl-theme">
                <div className="item">
                  <div className="gall_slider_box">
                    <img src="images\services_1.webp" alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="gall_slider_box">
                    <img src="images\services_2.webp" alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="gall_slider_box">
                    <img src="images\services_3.webp" alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="gall_slider_box">
                    <img src="images\services_4.webp" alt="img" />
                  </div>
                </div>
                <div className="item">
                  <div className="gall_slider_box">
                    <img src="images\services_5.webp" alt="img" />
                  </div>
                </div>

                <div className="owl-dots disabled"></div>
              </div>
              <div className="owl-nav">
                <button className="owl-prev" type="button" role="presentation">
                  <img
                    src="images\arrow-small-left.svg"
                    height="25"
                    width="25"
                  />
                </button>
                <button className="owl-next" type="button" role="presentation">
                  <img
                    src="images\arrow-small-right.svg"
                    height="25"
                    width="25"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </di>
    </>
  );
}
