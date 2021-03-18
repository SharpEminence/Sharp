import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
const Mainstage = () => {
  return (
    <div>
      <Layout>
      <div className="content-sec mainstagewrap sideSpacing_allPage">
        <div className="container">
          {/*----==================page main heading start==================----*/}
          <div className="page-heading">
            <h2>Main Stage</h2>
          </div>
          {/*----==================page main heading ends==================----*/}
          {/*----==================mainstage image section start==================----*/}
          <div className="mainstageimage">
          <div className="dashboard_video sideSpacing_allPage">
            <div>
              <div className="welcomeVideo"  >
                <div className="video">
                  <video
                    controls
                    width
                    poster={
                      process.env.PUBLIC_URL + "/assets/images/videoPoster.png"
                    }
                    className="dashboardVideoMedia"
                    id="ban_video"
                    style={{ width: "1600px",paddingRight:"800px" }}
                  >
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support HTML video.
                  </video>
                  <div className="videoControlBtn play-bt">
                   
                  </div>
                  <div
                    className="videoControlBtn pause-bt"
                    style={{ display: "none" }}
                  >
                   
                  </div>
                  <div className="mute-bt" />
                </div>
              </div>
            </div>
          </div>
 
          </div>
          {/*----==================mainstage image section ends==================----*/}
          {/*----==================mainstage listing section start==================----*/}
          <div className="mainstagelistwrap">
            <div className="mainstagelist row">
              <div className="col-lg-4 p-0">
                <div className="mainstagelistimg">
                  <img className="img-fluid"   src={
                        process.env.PUBLIC_URL +
                        "/assets/images/mainstagelistimg.png"} />
                </div>
              </div>
              <div className="col-lg-8 p-0">
                <div className="mainstagelisttxt">
                  <h2>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                </div>
              </div>
            </div>
            <div className="mainstagelist row">
              <div className="col-lg-4 p-0">
                <div className="mainstagelistimg">
                  <img className="img-fluid"   src={
                        process.env.PUBLIC_URL +
                        "/assets/images/mainstagelistimg.png"} />
                </div>
              </div>
              <div className="col-lg-8 p-0">
                <div className="mainstagelisttxt">
                  <h2>LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM</h2>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
                </div>
              </div>
            </div>
          </div>
          {/*----==================mainstage listing section ends==================----*/}
        </div>
      </div>      </Layout>
    </div>
  );
};

export default Mainstage;
