import React from "react";
import "./services.css";
export default function services() {
  return (
    <>
      <div className="services_sec" id="services">
        <div className="container">
          <div className="services_heading_sec mb-5">
            <span className="top_heading">Services We Offer </span>
            <h3 className="headings">
              OkRecharge Offers wide range of recharge Services
            </h3>
          </div>
          <div className="services_inner_sec row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 mb-5 sevices_col">
              <div className="services_box d-flex">
                <div className="services_con ">
                  <div className="services_icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <span className="services_title">Mobile Recharge</span>
                  <div className="services_con_inner_sec">
                    <p className="m-0">
                      OkRecharge Provide Mobile Recharge
                      (Airtel,Jio,Vodafone,Idea) with cashback feature upto 3%
                      for every user. Customer will easily download app from
                      play store OkRecharge App and do any recharge easily with
                      enter 10 digit number or select from phonebook of any user
                      with select operator and enter amount and do recharge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 sevices_col">
              <div className="services_box d-flex">
                <div className="services_con">
                  <div className="services_icon">
                    <i className="fas fa-tv"></i>
                  </div>
                  <span className="services_title">TV/DTH Recharge </span>
                  <div className="services_con_inner_sec">
                    <p className="m-0">
                      OkRecharge Provide TV/DTH Recharge (Airtel DTH,DISH
                      TV,Relience Digital TV,SunDirect,Tata Sky,VideoCon D2H)
                      with cashback feature upto 3% for every user. Customer
                      will easily download app from play store OkRecharge App
                      and do any TV/DTH Recharge easily with enter TV/DTH
                      number_format with select operator and enter amount and do
                      recharge.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 sevices_col">
              <div className="services_box d-flex">
                <div className="services_con">
                  <div className="services_icon">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <span className="services_title">Distributor/Retailer </span>
                  <div className="services_con_inner_sec">
                    <p className="m-0">
                      We Provide distributor / retailer feature to user. If user
                      want to became a distributor and create multiple retailer
                      , admin will create his account as a distributor then he
                      will create many retailer and get good commission.
                      Distributor create retailer and set according to every
                      retailer commission or flat amount add in his wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-5 sevices_col">
              <div className="services_box d-flex">
                <div className="services_con">
                  <div className="services_icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <span className="services_title">Reseller APIs </span>
                  <div className="services_con_inner_sec">
                    <p className="m-0">We provide apis for below services</p>
                    <ul className="p-0 m-0 mt-1">
                      <li>Recharges</li>
                      <li>DTH Recharges</li>
                      <li>Utility Bills</li>
                      <li>BBPS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="services_box d-flex">
                <div className="services_con">
                  <div className="services_icon">
                    <i className="fas fa-money-bill-wave"></i>
                  </div>
                  <span className="services_title">BBPS </span>
                  <div className="services_con_inner_sec">
                    <p className="m-0">
                      We provide all utility bill payment services gas, water,
                      electricity, landline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
