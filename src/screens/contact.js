import React from "react";
import "./contact.css";
export default function contact() {
  return (
    <>
      <section className="contact_sec" id="contact">
        <div className="container">
          <div className="contact_inner_sec">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-5 col-lg-5 col-12 lefttcol">
                <div className="contact_form_left_text">
                  <div className="services_heading_sec mb-4">
                    <span className="top_heading">Contact Us</span>
                    <h3 className="headings">We Are Service Ready!</h3>
                  </div>
                  <div className="contact_social_lnks">
                    <ul className="p-0 m-0">
                      <li className="d-flex ">
                        <span className="icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </span>
                        <span className="txts">
                          Suresh Mandawaliya Khachrod, Dist. Ujjain Pincode :
                          456224
                        </span>
                      </li>
                      <li className="d-flex">
                        <a
                          href="tel:9165292401"
                          className="d-flex align-items-center"
                        >
                          <span className="icon">
                            <i className="fas fa-phone-alt"></i>
                          </span>
                          <span className="txts"> 9165292401 </span>
                        </a>
                      </li>
                      <li className="d-flex">
                        <a
                          href="mailto:sureshmandavaliya@gmail.com"
                          className="d-flex align-items-center"
                        >
                          <span className="icon">
                            <i className="fas fa-envelope"></i>
                          </span>
                          <span className="txts">
                            sureshmandavaliya@gmail.com
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="get_ourapp_sec">
                    <h4 className="headings">Get Our App</h4>
                    <div className="download_app_sec">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.okrecharge"
                        className="float"
                        target="_blank"
                      >
                        <img src="https://okrecharge.co.in/assets/images/google-play-badge.jpeg" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 col-12">
                <div className="contact_form_bg">
                  <div className="contact_form_box">
                    <form id="contactForm">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form_group">
                            <div className="input_group">
                              <input type="text" placeholder="Name" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form_group">
                            <div className="input_group">
                              <input
                                type="email"
                                placeholder="E-mail Address"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form_group">
                            <div className="input_group">
                              <input type="text" placeholder="Subject" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                          <div className="form_group">
                            <div className="input_group d-flex align-items-center">
                              <select className="selectpickers form_control">
                                <option value="">91</option>
                                <option value="India">1</option>
                                <option value="USA">44</option>
                                <option value="Dubai">93</option>
                                <option value="Australia">78</option>
                              </select>
                              <input type="text" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form_group">
                        <div className="input_group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            className="form_control"
                          ></textarea>
                        </div>
                      </div>

                      <div className="form_group">
                        <div className="input_group">
                          <div
                            className="g-recaptcha"
                            id="feedback-recaptcha"
                            data-sitekey="6LeU9oEkAAAAACGt0pwson_vWppGP0br9Iz5VsIV"
                          ></div>
                          <span className="g-recaptcha-response_error show"></span>
                        </div>
                      </div>
                      <div className="button_group">
                        <button type="submit" className="site_btn submit_btn">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
