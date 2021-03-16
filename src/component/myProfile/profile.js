import React, { useState, Component } from "react";
import Layout from "../layout";
const Profile = () => {
  return (
    <div>
      <Layout>
        <div className="content-sec myprofilepage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>My Profile</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================my profile section start==================----*/}
            <div className="user-profile-sec">
              <div className="row">
                <div className="col-md-auto col-lg-auto">
                  <div className="user-profile-left text-center">
                    <div className="user-pic">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/user-iconmyprofile.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="user-profile-name">
                      <h2>user profile</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md col-lg">
                  <div className="user-profile-right">
                    <form className="updt-prfl">
                      <div className="form-gorup d-flex align-items-center">
                        <label>First name:</label>
                        <input
                          defaultValue
                          type="text"
                          placeholder
                          className="form-control"
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center">
                        <label>Last name:</label>
                        <input
                          defaultValue
                          type="text"
                          placeholder
                          className="form-control"
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center">
                        <label>Email Address:</label>
                        <input
                          defaultValue
                          type="email"
                          placeholder
                          className="form-control"
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center uploadimageprofile">
                        <label>Photo:</label>
                        <div className="upload-btn-wrapper">
                          <button className="btn">choose File</button>
                          <input type="file" name="myfile" />
                        </div>
                      </div>
                      <div className="form-gorup d-flex align-items-center justify-content-end updt-btn">
                        <button>update profile</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================my profile section ends==================----*/}
            {/*----==================agenda listing section start==================----*/}
            <div className="agendalistheading">
              <div className="myagendaheadingmp">MY AGENDA</div>
              <h1 className="mpagendahead d-flex align-items-center justify-content-between">
                Saturday, April 24, 2021 <a href="#">Build my Agenda</a>
              </h1>
            </div>
            <div className="cmnlistwrap agendalistwrap red-box">
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:00AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Welcome Intention / Movement Yoga Stretch{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                        {/*<div class="faq-excert ">
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
											</div>*/}
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Sharp Executive Welcome{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Emcee Introduction{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:20AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Opening Keynote{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>10:30AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Improving Brain Health: Strategies for Women of All
                          Ages{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Spectrum</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn gotosessionbtn" href="#">
                          Go to Session <span>&gt;</span>
                        </a>
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:00AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Welcome Intention / Movement Yoga Stretch{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                        {/*<div class="faq-excert ">
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
											</div>*/}
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Sharp Executive Welcome{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Emcee Introduction{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="agendatxtwraper">
                    <div className="cmnlisttxt">
                      <h2>9:20AM</h2>
                    </div>
                    <div className="agndatxtouter d-flex">
                      <div className="cmnlisttxt col">
                        <h3>
                          Opening Keynote{" "}
                          <span className="hrt-img">
                            <img
                              className
                              src={
                                process.env.PUBLIC_URL +
                                "/assets/images/heartfill-2.png"
                              }
                            />
                          </span>
                        </h3>
                        <h3>Main Stage</h3>
                      </div>
                      <div className="agendabtnwrap text-right col-auto p-0">
                        <a className="faqbtn agendabtn" href="#">
                          Learn More <span>&gt;</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================agenda listing section ends==================----*/}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
