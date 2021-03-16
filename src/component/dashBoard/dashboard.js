import React, { useState, Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import BreakoutCarousel from "./carousel_Breakout";
import Confrence_Carousel from "./carousel_Confrence";
import Layout from "../layout";
import MainStageCarousel from "./mainStageCarousel";
import Test1 from "./test";
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
                    width
                    poster={
                      process.env.PUBLIC_URL + "/assets/images/videoPoster.png"
                    }
                    className="dashboardVideoMedia"
                    id="ban_video"
                    style={{width:"760px",marginLeft:"40px"}}
                  >
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.ogg"
                      type="video/ogg"
                    />
                    Your browser does not support HTML video.
                  </video>
                  <div className="videoControlBtn play-bt">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/playBtn.png"
                      }
                      alt=""
                    />
                  </div>
                  <div
                    className="videoControlBtn pause-bt"
                    style={{ display: "none" }}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/pauseBtn.png"
                      }
                      alt=""
                    />
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
              <div className="count-row d-flex align-items-center justify-content-between">
                <div className="count-colmn">
                  <h2>800</h2>
                  <p>PARTICIPANTS</p>
                </div>
                <div className="count-colmn">
                  <h2>10</h2>
                  <p>DEPARTMENTS</p>
                </div>
                <div className="count-colmn">
                  <h2>6</h2>
                  <p>COUNTRIES</p>
                </div>
              </div>
            </div>
          </div>
          {/*-------=============counter section slider ends=============-------------*/}
          {/*-------=============conference slider start=============-------------*/}
          <div className="cnfhighlight">
            <div className="container">
              <div className="dg-slider-wrap">
                <h2 className="slider-heading" style={{paddingRight:"90px"}}>MAIN STAGE</h2>
                <Test1 />
              </div>
              <div className="dg-slider-wrap">
                <h2 className="slider-heading" style={{paddingRight:"90px"}}>CONFERENCE HIGHLIGHTS</h2>
               <br/>
                <Confrence_Carousel />
              </div>
            </div>
          </div>
          {/*-------=============conference slider ends=============-------------*/}
          {/*-------=============breakout sessions slider start=============-------------*/}
          <div className="breskpoutsession">
            <div className="container">
              <div className="dg-slider-wrap">
                <h2 className="slider-heading" style={{paddingRight:"90px"}}>BREAKOUT SESSIONS</h2>
               <br/>
                <BreakoutCarousel />
              </div>
            </div>
          </div>
          {/*-------=============breakout sessions slider ends=============-------------*/}
          {/*-------=============EXPLORE EXHIBIT section start=============-------------*/}
          <div className="exploreexhibit">
            <div className="container">
              <div className="exploreexhibitinner">
                <div className="exploreexhibitimg">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/exhibit-hall-bg.png"
                    }
                    style={{width:"760px",marginLeft:"82px"}}
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
