import React from "react";
require("dotenv").config();
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-4">
              <div className="footer-social">
                <ul className="d-flex align-items-center">
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={process.env.PUBLIC_URL + "/assets/images/fb.png"}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/twiiter.png"
                        }
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="img-fluid"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/insta.png"
                        }
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-logo">
              <a href="https://www.illumeet.com/">
                <img
                  className="img-fluid"
                  src={
                    process.env.PUBLIC_URL + "/assets/images/footer-logo.png"
                  }
                  alt=""
                />
                </a>
              </div>
            </div>
            <div className="col-4">
              <div className="privay_btn">
                <a href="#">privacy policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
