import React, { useState, useEffect } from "react";
import { Link,useParams } from "react-router-dom";
import Layout from "../layout";
const ExhibitHall = () => {
  const { id } = useParams();
const [ExhibitHall_DATA,setExhibitHall]=useState({})
console.log("exhibitHall_data", ExhibitHall_DATA);
console.log(id)
  //GET_EXHIBIT_HALL_DATA
  const getExhibitHallData = () => {
    fetch(`/api/v1/exhibit//getExhibit/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((exhibitHall_data) => {
        // console.log("exhibitHall_data", exhibitHall_data.data[0]);
        setExhibitHall(exhibitHall_data.data[0]);
      });
  };

  useEffect(() => {
    getExhibitHallData();
  }, []);

  return (
    <div>
      <Layout>
        <div>
          <div
            className="content-sec metourexhibitr sideSpacing_allPage"
            style={{ paddingLeft: "68px" }}
          >
            <div className="container">
              {/*----==================page main heading start==================----*/}
              <div className="page-heading">
                <h2>Meet Our Exhibitors</h2>
              </div>
              {/*----==================page main heading ends==================----*/}
              {/*----==================exhibitor section start==================----*/}
              <div className="exhibitrhead d-flex justify-content-between align-items-center">
                <div className="exhibitrtxt">
                  <h2>{ExhibitHall_DATA.title}</h2>
                  <p>
                   {ExhibitHall_DATA.content}
                  </p>
                </div>
                <div className="exhibitrlogo">
                  <img
                    className="img-fluid"
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/exhibitorlogo434.png"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="exhibitorvideosec">
                <div className="exhibitorvidwrap">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/images/vidimg.png"}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="exhibitorvidthumbwrap d-flex justify-content-between">
                  <div className="exhibitorvidthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/vidthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="exhibitorvidthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/vidthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="exhibitorvidthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/vidthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="exhbtrflpbook">
                <div className="exhbtrflpbookhead">
                  <h2>FLIPBOOKS</h2>
                </div>
                <div className="exhibitorflpbkwrap">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/exhibtrflpbk.png"
                    }
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="exbtrflpbktmbwrp d-flex justify-content-between">
                  <div className="exhibitorflpbkthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/flipthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="exhibitorflpbkthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/flipthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="exhibitorflpbkthumblst">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/flipthumb.png"
                      }
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="exhibitorflpbkthumblst">
                    <img
                      src="images/flipthumb.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="exhbtrsiteslnk">
                <div className="exhbtrsiteslnkhead">
                  <h2>SITES</h2>
                </div>
                <div className="exhbtlnkwrap d-flex align-items-center justify-content-between">
                  <div className="exhbtlnkwraplst">
                    <h3>URL 1</h3>
                    <p className="lnkbrdr" />
                    <h3>URL 2</h3>
                  </div>
                  <div className="exhbtlnkwraplst">
                    <h3>URL 3</h3>
                    <p className="lnkbrdr" />
                    <h3>URL 4</h3>
                  </div>
                </div>
                <div className="exbtrbktodashbtn text-right">
                  <Link to="/dashBoard">Back to Dashboard &gt;</Link>
                </div>
              </div>
              {/*----==================exhibitor section ends==================----*/}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ExhibitHall;
