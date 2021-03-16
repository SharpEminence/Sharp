import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";

const Mainstage = () => {
  return (
    <div>
      <Layout>
        <div className="content-sec faq sideSpacing_allPage"  >
          <div className="container" >
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>FAQ</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================faq listing section start==================----*/}
            <div className="cmnlistwrap faqlistwrap purple-box">
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>HOW TO NAVIGATE</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>WHAT’S A MEETUP LOUNGE</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>MAY I WATCH VIDEOS OF PRESENTERS AFTER THE EVENT?</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>HOW TO NAVIGATE</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>WHAT’S A MEETUP LOUNGE</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cmnlist row">
                <div className="col-lg-12 p-0">
                  <div className="cmnlisttxt">
                    <h2>MAY I WATCH VIDEOS OF PRESENTERS AFTER THE EVENT?</h2>
                    <div className="faq-excert ">
                      <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat. Ut wisi enim ad
                        minim veniam, quis nostrud exerci tation ullamcorper
                        suscipit lobortis nisl ut Lorem ipsum dolor sit amet,
                        consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat
                        volutpat. Ut wisi enim ad minim veniam, quis nostrud
                        exerci tation ullamcorper suscipit lobortis nisl ut{" "}
                      </p>
                    </div>
                    <div className="faqbtnwrap text-right">
                      <a className="faqbtn" href="#">
                        Read More <span>&gt;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================faq listing section ends==================----*/}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Mainstage;
