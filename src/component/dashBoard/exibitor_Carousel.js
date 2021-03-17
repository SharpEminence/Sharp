import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
const Exhibitor = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrowprev.png"
              }
              alt=""
              style={{ height: "55px" }}
            />
          </button>
        }
        rightChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrownext.png"
              }
              style={{ height: "55px" }}
              alt=""
            />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          {" "}
          <div style={{ marginTop: "10px", padding: "0px" }}>
            <div className="logo-slide-item">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/eh-img-1.png"}
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div style={{ marginTop: "10px", padding: "0px" }}>
            <div className="logo-slide-item">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/eh-img-4.png"}
                alt=""
              />
            </div>{" "}
          </div>
        </div>
        <div>
          {" "}
          <div style={{ marginTop: "10px", padding: "0px" }}>
            <div className="logo-slide-item">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/eh-img-4.png"}
                alt=""
              />
            </div>{" "}
          </div>
        </div>
        <div>
          {" "}
          <div style={{ marginTop: "10px", padding: "0px" }}>
            <div className="logo-slide-item">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/eh-img-2.png"}
                alt=""
              />
            </div>{" "}
          </div>
        </div>
        <div>
          {" "}
          <div style={{ marginTop: "10px", padding: "0px" }}>
            <div className="logo-slide-item">
              <img
                className="img-fluid"
                src={process.env.PUBLIC_URL + "/assets/images/eh-img-3.png"}
                alt=""
              />
            </div>{" "}
          </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Exhibitor;
