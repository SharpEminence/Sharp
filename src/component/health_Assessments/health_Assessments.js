import React, { useState } from "react";
import Layout from "../layout";
import { Link } from "react-router-dom";

const Health_Assessments = (props) => {
  return (
    <div>
      <Layout>
        <div
          className="content-sec healthasesment sideSpacing_allPage"
         
        >
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>health Assessments</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================videos listing section start==================----*/}
            <div className="videosecwrap healthasesmentwrap blue-box">
              <div className="row">
                <div className="col-lg-4 videoseclist healthasesmentlist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 videoseclist">
                  <div className="slider-type-two">
                    <div className="stt-header d-flex align-items-center">
                      <div className="stt-headerimg">
                        <img
                          className="img-fluid"
                          src={
                            process.env.PUBLIC_URL + "/assets/images/bs-img.png"
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="sto-content">
                      <h2>LOREM IPSUM DOLOR SIT AMET</h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit,sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis
                      </p>
                      <a className="lrnmorebtn" href="#" tabIndex={0}>
                        Take Survey &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================videos listing section ends==================----*/}
          </div>
        </div>{" "}
      </Layout>
    </div>
  );
};

export default Health_Assessments;
