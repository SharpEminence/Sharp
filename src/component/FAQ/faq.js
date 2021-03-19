import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";

const Faq = () => {
  const [read_More, setReadMore] = useState(false);
  const [faqData, setFaqData] = useState([]);
  var readMore = (data) => {
    console.log("clickACTIVITY", data);
    setReadMore((read_More) => !read_More);
  };
  const getData = () => {
    fetch("/api/v1/faq/getAll", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("resp", data.data);
        setFaqData(data.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Layout>
        <div className="content-sec faq sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>FAQ</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================faq listing section start==================----*/}
            <div className="cmnlistwrap faqlistwrap purple-box">
              {faqData.map((value) => {
                console.log("faqData", value);

                return (
                  <div className="cmnlist row">
                    <div className="col-lg-12 p-0">
                      <div className="cmnlisttxt">
                        <h2>{value.question}</h2>
                        <div className="faq-excert ">
                          <p>
                            {read_More
                              ? value.description.substring(0, 0)
                              : value.description}
                          </p>
                        </div>
                        <div className="faqbtnwrap text-right">
                          <a
                            className="faqbtn agendabtn"
                            href="#"
                            onClick={(e) => readMore(value)}
                          >
                            Read More{" "}
                            {read_More ? (
                              <span style={{ transform: "rotate(270deg)" }}>
                                &gt;
                              </span>
                            ) : (
                              <span>&gt;</span>
                            )}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* ============================= */}

              {/* ======================================== */}
            </div>
            {/*----==================faq listing section ends==================----*/}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Faq;
