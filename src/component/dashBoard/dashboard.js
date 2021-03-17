import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import BreakoutCarousel from "./carousel_Breakout";
import Confrence_Carousel from "./carousel_Confrence";
import Layout from "../layout";
import MainStageCarousel from "./mainStageCarousel";
import Test from "./test";
import Exhibitor_Carousel from "./exibitor_Carousel";
const DashBoard = () => {
  return (
    <div>
      <Layout>
        <div className="content-sec">
          {/*-------=============video section start=============-------------*/}
          <div className="dashboard_video sideSpacing_allPage">
            <div className="container">
              <div className="welcomeVideo">
                <div className="video">
                  <video
                    controls
                    width
                    poster={
                      process.env.PUBLIC_URL + "/assets/images/videoPoster.png"
                    }
                    className="dashboardVideoMedia"
                    id="ban_video"
                    style={{ width: "760px", marginLeft: "40px" }}
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
          {/*-------=============video section ends=============-------------*/}

          {/*-------=============counter section slider start=============-------------*/}
          <div className="count_sec">
            <div className="container">
              <div className="dashvidbtmtxt">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis Lorem ipsum
                dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis
              </div>
            </div>
          </div>
          {/*-------=============counter section slider ends=============-------------*/}
          {/*-------=============conference slider start=============-------------*/}
          <div className="mainstagedashwrap">
            <div className="container">
              <div className="dg-slider-wrap">
                <h2 className="slider-heading" style={{ paddingRight: "90px" }}>
                  MAIN STAGE
                </h2>
                <div className="mainstagelistwrap" >
                  
                    <Test/>
                    
                  
                  <div className="dashgostagebtn" style={{ paddingRight: "90px" }}>
                    <Link to="/mainstage" >Go to Stage &gt;</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*-------=============conference slider ends=============-------------*/}
          {/*-------=============breakout sessions slider start=============-------------*/}
          <div className="breskpoutsession">
            <div className="container">
              <div className="dg-slider-wrap">
                <h2 className="slider-heading" style={{ paddingRight: "90px" }}>
                  BREAKOUT SESSIONS
                </h2>
                <br />
                <BreakoutCarousel />
              </div>
            </div>
          </div>

          {/*-------=============breakout sessions slider ends=============-------------*/}
          <div className="metorexhibitordash">
            <div className="container">
              <div className="moesliderwrap">
                <h2 className="slider-heading" style={{ paddingRight: "80px" }}>
                  MEET OUR EXHIBITORS
                </h2>
                <div className="logos-slide slider">
                  <Exhibitor_Carousel />
                </div>
              </div>
            </div>
          </div>

          {/*-------=============EXPLORE EXHIBIT section start=============-------------*/}
          <div className="exploreexhibit">
            <div className="container">
              <div className="exploreexhibitinner">
                <div className="exploreexhibitimg">
                  <img
                    className="img-fluid"
                    style={{ paddingLeft: "70px", height: "290px" }}
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/exhibit-hall-bg.png"
                    }
                    alt=""
                  />
                </div>
                <h2>EXPLORE EXHIBIT HALL</h2>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DashBoard;
