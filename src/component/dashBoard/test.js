import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
const Test = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
    <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrowprev.png"
              }
              alt=""
              style={{height:"55px"}}
            />
          </button>
        }
        rightChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrownext.png"
              }
              style={{height:"55px"}}
              alt=""
            />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div> <div
                
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                            style={{height:"201px"}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2 style={{color:"#625e9d"}}>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     
        </div>
        <div> <div
                
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                            style={{height:"201px"}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2 style={{color:"#625e9d"}}>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     </div>
        <div> <div
                
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                            style={{height:"201px"}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2 style={{color:"#625e9d"}}>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     </div>
        <div > <div
                
                style={{ marginTop: "10px", padding: "0px" }}
              >
                <div className="mainstagelistwrap">
                  <div className="container">
                    <div className="mainstagelist row">
                      <div className="col-lg-4 p-0">
                        <div className="mainstagelistimg">
                          <img
                            className="img-fluid"
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/mainstagelistimg.png"
                            }
                            style={{height:"201px"}}
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 p-0">
                        <div className="mainstagelisttxt">
                          <h2 style={{color:"#625e9d"}}>
                            LOREM IPSUM DOLOR SIT AMET, CONSECTETUER | 9:00 AM
                          </h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet dolore magna
                            aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit
                            lobortis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
     </div>
      </ItemsCarousel>
    </div>
  );
};

export default Test;
