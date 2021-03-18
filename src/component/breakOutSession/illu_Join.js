import React, { useState } from "react";
import BreakoutCarousel from "../dashBoard/carousel_Breakout";
import { Link } from "react-router-dom";
import Layout from "../layout";
// import BreakOutSession_Carousel from "./breakoutSession_Carousel_up";
const Illu_Join = (props) => {
  return (
    <div>
      <Layout>
        <div className="content-sec breakoutsesionpage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>breakout Sessions</h2>
            </div>
           <h1>ILLU_JOIN_PAGE</h1>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Illu_Join;
