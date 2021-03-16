import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";

const MeetupLounges = () => {
  return (
    <div>
      <Layout>
        <div className="content-sec meetuplounges sideSpacing_allPage" >
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>MEETUP LOUNGES</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================speaker listing section start==================----*/}
            <div className="cmnlistwrap meetuploungeslist">
              <div className="cmnlist row">
                <div className="col-lg-3 p-0">
                  <div className="cmnlistimg">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/speaker-img.png"
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-9 p-0">
                  <div className="cmnlisttxt">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <h2>9:00 AM</h2>
                    <div className="meetuplounge-excert blue-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                    <div className="gotosessionbtnwrap text-right">
                      <a className="gotosessionbtn" href="#">
                        Go to Session &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-3 p-0">
                  <div className="cmnlistimg">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/speaker-img.png"
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-9 p-0">
                  <div className="cmnlisttxt">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <h2>9:00 AM</h2>
                    <div className="meetuplounge-excert blue-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                    <div className="gotosessionbtnwrap text-right">
                      <a className="gotosessionbtn" href="#">
                        Go to Session &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-3 p-0">
                  <div className="cmnlistimg">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/speaker-img.png"
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-9 p-0">
                  <div className="cmnlisttxt">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <h2>9:00 AM</h2>
                    <div className="meetuplounge-excert blue-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                    <div className="gotosessionbtnwrap text-right">
                      <a className="gotosessionbtn" href="#">
                        Go to Session &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-3 p-0">
                  <div className="cmnlistimg">
                    <img
                      className="img-fluid"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/speaker-img.png"
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-9 p-0">
                  <div className="cmnlisttxt">
                    <h1>LOREM IPSUM DOLOR SIT AMET</h1>
                    <h2>9:00 AM</h2>
                    <div className="meetuplounge-excert blue-box">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                      <br />
                      <br />
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut aliquip ex ea commodo
                        consequat. Duis Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt
                        ut laoreet dolore magna aliquam erat volutpat. Duis
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </p>
                    </div>
                    <div className="gotosessionbtnwrap text-right">
                      <a className="gotosessionbtn" href="#">
                        Go to Session &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MeetupLounges;
