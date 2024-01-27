import React from "react";
import "./about.css";
export default function about() {
  return (
    <>
      <div className="about_sec" id="about">
        <div className="container">
          <div className="about_content_sec row">
            <div className="col-lg-7 col-md-12">
              <div className="about_con">
                <span className="top_heading">About Us</span>
                <h3 className="headings">
                  We Are Here To Help You Build Your Business
                </h3>
                <p>
                  OkRecharge Provide Mobile Recharge (Airtel,Jio,Vodafone,Idea)
                  with cashback feature upto 3% for every user. OkRecharge
                  Provide TV/DTH Recharge (Airtel DTH,DISH TV,Relience Digital
                  TV,SunDirect,Tata Sky,VideoCon D2H) with cashback feature upto
                  3% for every user. We Provide distributor / retailer feature
                  to user. If user want to became a distributor and create
                  multiple retailer , admin will create his account as a
                  distributor then he will create many retailer and get good
                  commission. Distributor create retailer and set according to
                  every retailer commission or flat amount add in his wallet.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="about_counter_boxes_cover d-flex flex-wrap slidefromright wow">
                <div className="about_counter_boxes">
                  <h3 className="cnt_heading">
                    <span
                      className="numbers counter_number"
                      data-from="0"
                      data-to="200"
                      data-speed="5000"
                    >
                      200
                    </span>
                    <span className="icons">+</span>
                  </h3>
                  <p>Projects</p>
                </div>
                <div className="about_counter_boxes">
                  <h3 className="cnt_heading">
                    <span
                      className="numbers counter_number"
                      data-from="0"
                      data-to="100"
                      data-speed="5000"
                    >
                      100
                    </span>
                    <span className="icons">+</span>
                  </h3>
                  <p>Clients</p>
                </div>
                <div className="about_counter_boxes">
                  <h3 className="cnt_heading">
                    <span
                      className="numbers counter_number"
                      data-from="0"
                      data-to="15"
                      data-speed="5000"
                    >
                      15
                    </span>
                    <span className="icons">+</span>
                  </h3>
                  <p>Experience</p>
                </div>
                <div className="about_counter_boxes">
                  <h3 className="cnt_heading">
                    <span
                      className="numbers counter_number"
                      data-from="0"
                      data-to="50"
                      data-speed="5000"
                    >
                      50
                    </span>
                    <span className="icons">+</span>
                  </h3>
                  <p>Hard Workers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_sec_bg_div">
          <div className="about_sec_image">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </>
  );
}
