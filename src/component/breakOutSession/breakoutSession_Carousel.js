import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
const BreakOutSession_Carousel = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 10;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <br />
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <div
            style={{
              backgroundColor: "white",
              border: "none",
              width: "31px",
              height: "63px",
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrowprev.png"
              }
              style={{ width: "31px", height: "63px" }}
              alt=""
            />
          </div>
        }
        rightChevron={
          <div
            style={{
              backgroundColor: "white",
              border: "none",
              width: "31px",
              height: "63px",
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrownext.png"
              }
              style={{ width: "31px", height: "63px" }}
              alt=""
            />
          </div>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bsa-slide slider">
            <div className="dg-slide-item">
              <div className="slider-type-two">
                <div className="stt-header d-flex align-items-center">
                  <div className="stt-headerimg">
                    <img
                      className="img-fluid"
                      src={process.env.PUBLIC_URL + "/assets/images/bs-img.png"}
                      alt=""
                    />
                  </div>
                </div>
                <div className="sto-content">
                  <h2>
                    Essential Elements for a Balanced You
                    <br />
                    10:30 AM
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis. Lorem
                    ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis.
                    Lorem ipsum dolor sit amet, consectetuer adipisc
                  </p>
                  <a className="lrnmorebtn" href="#">
                    Go to Session &gt;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default BreakOutSession_Carousel;
