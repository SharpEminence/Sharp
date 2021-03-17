import React, { useState } from "react";
import BreakoutCarousel from "../dashBoard/carousel_Breakout";
import { Link } from "react-router-dom";
import Layout from "../layout";
import BreakOutSession_Carousel from "./breakoutSession_Carousel";
const BreakoutSession = (props) => {
  return (
    <div>
      <Layout>
        <div className="content-sec breakoutsesionpage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>breakout Sessions</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*-------=============breakout sessions A slider start=============-------------*/}
            <div className="breskpoutsession">
              <div className="dg-slider-wrap">
                {/*-------=============BSA slider start=============-------------*/}
                <div className="slider-heading">
                  <h2>
                    Breakout Session A <span>|</span> 10:30AM - 11:15AM{" "}
                  </h2>
                  <Link to="/agenda">Back to Agenda &gt;</Link>
                </div>
                {/* ---------------BREAKOUTsESSION_CAROUSEL------------------- */}
                <div>
                  <BreakOutSession_Carousel />
                </div>
                {/* ---------------BREAKOUTsESSION_CAROUSEL------------------- */}
                <div className="slider-heading bsbsliderheading">
                  <h2>
                    Breakout Session B <span>|</span> 11:30AM - 12:15PM{" "}
                  </h2>
                </div>
                <BreakOutSession_Carousel />
                {/*-------=============BS-B slider ends=============-------------*/}
              </div>
            </div>
            {/*-------=============breakout sessions A slider ends=============-------------*/}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BreakoutSession;
