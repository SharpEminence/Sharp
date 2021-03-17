import React, { useState } from "react";
import Footer from "../footer";
import { Link } from "react-router-dom";
const AdminLayout = (props) => {
  const [open, setOpen] = useState(false);

  const onSlide = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg fixed-top" style={{background:'#10daef'}}>
          <div className="header_inner d-flex align-items-center justify-content-between">
            <div className="header-left">
              <img
                className="hamburger-icon"
                src={
                  process.env.PUBLIC_URL + "/assets/images/hamburger-icon.png"
                }
                onClick={onSlide}
              />
            </div>

            <div className="header-right d-flex align-items-center justify-content-end">
              <div className="header-logo">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/logo-main.png"}
                  className="img-fluid"
                />
              </div>
              <div className="profile-icon">
                <div className="dropdown show">
                  <a
                    className="btn btn-secondary dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/images/user-icon.png"
                      }
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section classname="main-sec">
        <div className="d-flex">
          <div className={open ? "left-sidebar menuhideshow" : "left-sidebar"}>
            <div className="side-menu">
              <ul>
                <li className="Dashboard-menu ">
                  <Link to="/admin/dashBoard">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-1-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-1-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Dashboard</span>
                    </div>
                  </Link>
                </li>
                <li className="Agenda-menu">
                  <Link to="/admin/agenda_show">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-2-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-2-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Agenda</span>
                    </div>
                  </Link>
                </li>
                <li className="Main-Stage-menu active">
                  <Link to="/mainstage">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-3-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-3-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Main Stage</span>
                    </div>
                  </Link>
                </li>
                <li className="Speakers-menu">
                  <Link to="/breakoutSession">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-4-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-4-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Breakout Sessions</span>
                    </div>
                  </Link>
                </li>
                <li className="Exhibit-Hall-menu">
                  <Link to="#">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-5-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-5-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Exhibit Hall</span>
                    </div>
                  </Link>
                </li>
                <li className="Exhibitor-Info-menu">
                  <Link to="/health_Assessments">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-6-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-6-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Health Assessments</span>
                    </div>
                  </Link>
                </li>
                {/* <li className="Wellness-Journey-menu">
                  <Link to="#">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-7-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-7-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Wellness Journey</span>
                    </div>
                  </Link>
                </li> */}
                {/* <li className="Meetup-Lounges-menu">
                  <Link to="/meetup_Lounges">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-8-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-8-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Meetup Lounges</span>
                    </div>
                  </Link>
                </li> */}
                <li className="FAQ-menu">
                  <Link to="/FAQ">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-9-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-9-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>FAQ</span>
                    </div>
                  </Link>
                </li>
                {/* <li className="Videos-menu">
                  <Link to="#">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-10-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-10-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Videos</span>
                    </div>
                  </Link>
                </li> */}
                {/* <li className="My-Profile-menu">
                  <Link to="#">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-11-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src="images/side-icon-11-blue.png"
                      />
                    </div>
                    <div className="side-menutext">
                      <span>My Profile</span>
                    </div>
                  </Link>
                </li> */}
                <li className="logout-menu">
                  <Link to="#">
                    <div className="side-menuimg">
                      <img
                        className="greyicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-12-grey.png"
                        }
                      />
                      <img
                        className="blueicon"
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/side-icon-12-blue.png"
                        }
                      />
                    </div>
                    <div className="side-menutext">
                      <span>Logout</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {props.children}
        </div>
      </section>

     
    </div>
  );
};

export default AdminLayout;
