import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";
import { ToastContainer, toast } from "react-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/action";

// import M from "materialize-css";
const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  //FORM DATA
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  console.log("LOGIN_INPUT====>", email, password);

  //CLICK OPERATION
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => {
    setOpen1(false);
    SetLoginCheck(true);
  };
  const Completionist = () => <span>You are good to go!</span>;
  const [loginCheck1, SetLoginCheck] = useState(false);
  const [error, setError] = useState("");
  console.log("logincheck", loginCheck1);
  const validateData = (email, password) => {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      if (
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)
      ) {
        return true;
      } else {
        setError(
          "Your password must contain at least lowercase,Upercase.number and special character"
        );
        return false;
      }
    } else {
      setError("You have entered an invalid email address!");
      return false;
    }
  };

  const PostData = () => {
    //console.log("heloo Login");
    fetch("/api/v1/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("USER_DATA====>", data);

        if (data.data.token) {
          localStorage.setItem("jwt", data.data.token);
          localStorage.setItem("user", JSON.stringify(data.data.user));
          localStorage.setItem("user_id", data.data.user._id);
          dispatch(addUser(data.data.user));
          //dispatch({type:"USER",payload:data.user})
          toast.error("err");
          // M.toast({
          //   html: "LOGIN SUCCESSFULL !",
          //   classes: "#43a047 green darken-1",
          // });
          history.push("/dashBoard");
        } else {
          history.push("/Login");
          toast.error("jhgajds");

          // M.toast({ html: "LOGIN FAILED !", classes: "#c62828 red darken-3" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const loginCheck = () => {
    SetLoginCheck((loginCheck1) => !loginCheck1);
  };
  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    console.log("days", hours);
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div>
          <table>
            <tr>
              <td>
                <span className="loginTimer">
                  <div class="days loginTimer">
                    {days}
                    <p>DAYS</p>{" "}
                  </div>
                </span>
              </td>
              <td></td> <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="loginTimer">
                  <div class="days loginTimer">
                    {hours}
                    <p>HOURS</p>{" "}
                  </div>
                </span>
              </td>
              <td></td> <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="loginTimer">
                  <div class="days loginTimer">
                    {minutes} <p>MINUTES</p>{" "}
                  </div>
                </span>
              </td>
              <td></td> <td></td>
              <td></td>
              <td></td>
              <td>
                <span className="loginTimer">
                  <div class="days loginTimer">
                    {seconds}
                    <p>SECONDS</p>{" "}
                  </div>
                </span>
              </td>
            </tr>
          </table>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="nhmLoginwrap">
        <div className="nhmLogin">
          <div className="nhmloginfloatingitems">
            <div className="lift-logo">
              <img
                className="img-fluid"
                src="../../assets/images/lift-logo.png"
                alt=""
              />
            </div>
            <div className="ftflowertop">
              <img
                className="img-fluid"
                src="../../assets/images/login-flower-3.png"
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="loginSecRow">
              <div className="loginLogoLeft">
                <div className="login-left-img">
                  <img src="../../assets/images/login-left-image.png" alt="" />
                </div>
              </div>
              <div className="loginRightForm">
                <div className="rightFormInner">
                  <div className="loginTimer">
                    <div id="loginTime">
                      {/* ---------------------------------INSERT COUNTDOWN TIME------------------- */}

                      <Countdown
                        date={Date.now() + 3225600000}
                        renderer={renderer}
                      />
                    </div>
                  </div>
                  <div className="loginFormField">
                    <div className="loginTitle">
                      <h2>LOGIN</h2>
                    </div>
                    <form className="formField">
                      <div className="form-group">
                        <label>E-MAIL ADDRESS</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>PASSWORD</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPasword(e.target.value)}
                        />
                      </div>
                      <div className="checkBoxBtn">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={loginCheck}
                            checked={loginCheck1}
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            CLICK TO ACCEPT THE{" "}
                            {/* <link
                              to="#"
                              data-toggle="modal"
                              data-target="#privacy_policy"
                            >
                            PRIVACY POLICY
                            </link> */}
                            <a>
                              <span>
                                <Link onClick={onOpenModal1}>
                                  PRIVACY POLICY
                                </Link>{" "}
                              </span>
                            </a>
                          </label>
                        </div>

                        {loginCheck1 && email && password ? (
                          <button
                            type="button"
                            className="loginBtn"
                            data-toggle="modal"
                            data-target="#cmn-popup"
                            value="Submit"
                            // onClick={onOpenModal}
                            onClick={() => PostData()}
                          >
                            Login
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="loginBtn"
                            style={{background:'#13508457'}}
                            data-toggle="modal"
                            data-target="#cmn-popup"
                            disabled={true}
                            // onClick={onOpenModal}
                            onClick={() => PostData()}
                          >
                            Login
                          </button>
                        )}
                      </div>
                      <div className="form-error" style={{ display: "none" }}>
                        <p>
                          If you are having trouble signing in, please contact
                          our event concierge at:invitation@illumeet.com
                        </p>
                      </div>
                    </form>
                  </div>
                  <div className="women_logo">
                    <img
                      className="img-fluid"
                      src="../../assets/images/sharp-women-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<video autoplay="" muted="" loop="" id="myVideoss" playsinline="" preload="metadata">
        <source src="video/WiSCLoginVideo.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>*/}
        </div>
      </div>

      <Modal open={open} onClose={onCloseModal} center>
        {/*---------commonpopup start--------*/}

        <div className="modal-dialog modal-dialog-centered">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body boxScroll">
              <div className="cmn-popup-txt">
                <p>
                  YOUR EVENT HAS NOT STARTED YET.
                  <br />
                  PLEASE COME BACK AT 9:00AM CST ON MARCH 29, 2021 TO GAIN
                  ENTRY.
                  <br />
                  FOR THE BEST USER EXPERIENCE, PLEASE USE THE CHROME BROWSER.
                  <br />
                  THANK YOU!
                </p>
              </div>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </Modal>
      {/* ------------------------------------------------------------- */}
      {/*---------commonpopup ends---------*/}
      <Modal open={open1} onClose={onCloseModal1} center>
        {/* <div classNames="privacy_plcy"> */}
        <div
          className="privacy_plcy modal-dialog modal-lg modal-dialog-centered"
          style={{ width: "610px" }}
        >
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Online Privacy Policy Agreement</h4>
            </div>
            <div className="modal-body">
              <div className="privacy_policy_text">
                <div style={{ textAlign: "left" }}>
                  <strong>ONLINE PRIVACY POLICY AGREEMENT</strong>
                  <br />
                  Updated: July 1, 2020
                  <br />
                  <br />
                  Illumeet values its users' privacy. This Privacy Policy
                  ("Policy") will help you understand how we collect and use
                  personal information from those who visit our website or make
                  use of our online facilities and services, and what we will
                  and will not do with the information we collect. Our Policy
                  has been designed and created to ensure our commitment and
                  realization of our obligation not only to meet but to exceed
                  most existing privacy standards.
                  <br />
                  <br />
                  We reserve the right to make changes to this Policy at any
                  given time. If you want to make sure
                  <br />
                  that you are up to date with the latest changes, we advise you
                  to frequently visit this page. If at
                  <br />
                  any point in time Illumeet decides to make use of any
                  personally identifiable information on file, in a manner
                  vastly different from that which was stated when this
                  information was initially collected, the user or users shall
                  be promptly notified by email. Users at that time shall have
                  the option as to whether to permit the use of their
                  information in this separate manner.
                  <br />
                  <br />
                  This Policy applies to Illumeet, and it governs any and all
                  data collection and usage by us. Through the use of
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="https://illumeet.com"
                  >
                    https://illumeet.com
                  </Link>
                  , you are therefore consenting to the data collection
                  procedures expressed in this Policy.
                  <br />
                  <br />
                  Please note that this Policy does not govern the collection
                  and use of information by companies that Illumeet does not
                  control, nor by individuals not employed or managed by us. If
                  you visit a website that we mention or link to, be sure to
                  review its privacy policy before providing the site with
                  information. It is highly recommended and suggested that you
                  review the privacy policies and statements of any website you
                  choose to use or frequent to better understand the way in
                  which websites garner, make use of, and share the information
                  collected.
                  <br />
                  <br />
                  Specifically, this Policy will inform you of the following:
                  <ul>
                    <li>
                      What personally identifiable information is collected from
                      you through our website;{" "}
                    </li>
                    <li>
                      Why we collect personally identifiable information and the
                      legal basis for such collection;{" "}
                    </li>
                    <li>
                      How we use the collected information and with whom it may
                      be shared;{" "}
                    </li>
                    <li>
                      What choices are available to you regarding the use of
                      your data; and{" "}
                    </li>
                    <li>
                      The security procedures in place to protect the misuse of
                      your information.
                    </li>
                  </ul>
                  <br />
                  <strong>
                    <u>Information We Collect</u>
                  </strong>
                  <br />
                  <br />
                  It is always up to you whether to disclose personally
                  identifiable information to us, although if you elect not to
                  do so, we reserve the right not to register you as a user or
                  provide you with any products or services. This website
                  collects various types of information, such as: <br />
                  <br />
                  Information automatically collected when visiting our website,
                  which may include cookies, third party tracking technologies,
                  and server logs.
                  <br />
                  <br />
                  In addition, Illumeet may, on occasion, collect non-personal
                  anonymous demographic information, such as age, gender,
                  household income, political affiliation, race and religion, as
                  well as the type of browser you are using, IP address, or type
                  of operating system, which will assist us in providing and
                  maintaining superior quality service.
                  <br />
                  <br />
                  Illumeet may also deem it necessary, from time to time, to
                  follow websites that our users may frequent to glean types of
                  services and products most popular to customers or the general
                  public.
                  <br />
                  <br />
                  <strong>
                    <u>Why We Collect Information and For How Long</u>
                  </strong>
                  <br />
                  <br />
                  We are collecting your data for several reasons:
                  <br />
                  <br />
                  <ul>
                    <li>
                      To better understand your needs and provide you with the
                      services you have requested;
                    </li>
                    <li>
                      To fulfill our legitimate interest in improving our
                      services and products;
                    </li>
                    <li>
                      To send you promotional emails containing information we
                      think you may like when we
                    </li>
                  </ul>
                  have your consent to do so;
                  <br />
                  <ul>
                    <li>
                      To contact you to fill out surveys or participate in other
                      types of market research, when we have your consent to do
                      so; and
                    </li>
                    <li>
                      To customize our website according to your online behavior
                      and personal preferences.
                    </li>
                  </ul>
                  <br />
                  The data we collect from you will be stored for no longer than
                  necessary. The length of time we retain said information will
                  be determined based upon the following criteria: <br />
                  <br />
                  <ul>
                    <li>
                      The length of time your personal information remains
                      relevant;{" "}
                    </li>
                    <li>
                      The length of time it is reasonable to keep records to
                      demonstrate that we have fulfilled our duties and
                      obligations;
                    </li>
                    <li>
                      Any limitation periods within which claims might be made;{" "}
                    </li>
                    <li>
                      Any retention periods prescribed by law or recommended by
                      regulators, professional bodies or associations; and/or
                    </li>
                    <li>
                      The type of contract we have with you, the existence of
                      your consent, and our legitimate interest in keeping such
                      information as stated in this Policy.
                    </li>
                  </ul>
                  <br />
                  <strong>
                    <u>Use of Information Collected</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet does not now, nor will it in the future, sell, rent
                  or lease any of its customer lists and/or names to any third
                  parties.
                  <br />
                  <br />
                  Illumeet may collect and may make use of personal information
                  to assist in the operation of our website and to ensure
                  delivery of the services you need and request. At times, we
                  may find it necessary to use personally identifiable
                  information as a means to keep you informed of other possible
                  products and/or services that may be available to you from
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="https://illumeet.com"
                  >
                    https://illumeet.com
                  </Link>
                  .<br />
                  <br />
                  Illumeet may also be in contact with you with regards to
                  completing surveys and/or research questionnaires related to
                  your opinion of current or potential future services that may
                  be offered.
                  <br />
                  <br />
                  Illumeet uses various third-party social media features
                  including but not limited to Facebook, Twitter, Instagram, and
                  other interactive programs. These may collect your IP address
                  and require cookies to work properly. These services are
                  governed by the privacy policies of the providers and are not
                  within Illumeet's control.
                  <br />
                  <br />
                  <strong>
                    <u>Disclosure of Information</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet may not use or disclose the information provided by
                  you except under the following circumstances:
                  <br />
                  <br />
                  <ul>
                    <li>
                      As necessary to provide services or products you have
                      ordered;{" "}
                    </li>
                    <li>
                      In other ways described in this Policy or to which you
                      have otherwise consented;{" "}
                    </li>
                    <li>
                      In the aggregate with other information in such a way so
                      that your identity cannot reasonably be determined;{" "}
                    </li>
                    <li>
                      As required by law, or in response to a subpoena or search
                      warrant;{" "}
                    </li>
                    <li>
                      To outside auditors who have agreed to keep the
                      information confidential;{" "}
                    </li>
                    <li>As necessary to enforce the Terms of Service; or</li>
                    <li>
                      As necessary to maintain, safeguard, and preserve all the
                      rights and property of Illumeet.
                    </li>
                  </ul>
                  <br />
                  <strong>
                    <u>Non-Marketing Purposes</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet greatly respects your privacy. We do maintain and
                  reserve the right to contact you if needed for non-marketing
                  purposes (such as bug alerts, security breaches, account
                  issues, and/or changes in Illumeet products and services). In
                  certain circumstances, we may use our website, newspapers, or
                  other public means to post a notice.
                  <br />
                  <br />
                  <br />
                  <strong>
                    <u>Children Under the Age of 13</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet is committed to protecting the privacy of children
                  who visit our website or make use of our online facilities and
                  services. This Children’s Online Privacy Policy explains our
                  information collection, disclosure, and parental consent
                  practices with respect to the information provided by children
                  under the age of 13 (“child” or “children”), and uses terms
                  that are defined in our general Privacy Policy. This policy is
                  in accordance with the U.S. Children’s Online Privacy
                  Protection Act (“COPPA”) and outlines our practices in the
                  United States and Latin America regarding children’s personal
                  information. For more information about COPPA and general tips
                  about protecting children’s online privacy, please visit{" "}
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="https://www.consumer.ftc.gov/articles/0031-protecting-your-childs-privacy-online"
                  >
                    OnGuard Online
                  </Link>
                  .<br />
                  <br />
                  <strong>
                    <u>
                      The Information We Collect From Children, How We Use It,
                      and How And When We Communicate With Parents
                    </u>
                  </strong>
                  <br />
                  <br />
                  Illumeet offers to its users a website, online facilities, and
                  services, some of which are primarily for users above the age
                  of 13, and others that are intended for users of all ages and
                  their families. Below, we summarize potential instances of
                  collection and outline how and when we will provide parental
                  notice and/or seek parental consent. In any instance that we
                  collect personal information from a child, we will retain that
                  information only so long as reasonably necessary to fulfill
                  the activity request or allow the child to continue to
                  participate in the activity, and ensure the security of our
                  users and our services, or as required by law. In the event we
                  discover we have collected information from a child in a
                  manner inconsistent with COPPA’s requirements, we will either
                  delete the information or immediately seek the parent’s
                  consent for that collection.
                  <br />
                  <br />
                  <strong>
                    <u>Registration</u>
                  </strong>
                  <br />
                  <br />
                  Children can, in many cases, register with our websites and
                  online facilities and services to view content, participate in
                  contests, and engage in special features, among other things.
                  During the registration process, we may ask the child to
                  provide certain information for notification and security
                  purposes, including a parent or guardian’s email address, the
                  child’s first name, the location, child’s member or account
                  username, and password. We also may ask for birth dates from
                  children to validate their ages. We strongly advise children
                  never to provide any personal information in their usernames.
                  Please note that children can choose whether to share their
                  information with us, but certain features cannot function
                  without it. As a result, children may not be able to access
                  certain features if required information has not been
                  provided. We will not require a child to provide more
                  information than is reasonably necessary in order to
                  participate in an online activity.
                  <br />
                  <br />
                  <strong>
                    <u>Parental Choices and Controls</u>
                  </strong>
                  <br />
                  <br />
                  At any time, parents can refuse to permit us to collect
                  further personal information from their children in
                  association with a particular registration and can request
                  that we delete from our records the personal information we
                  have collected in connection with that registration. Please
                  keep in mind that a request to delete records may lead to
                  registration termination and as a result, children may not be
                  able to access certain features.
                  <br />
                  <br />
                  Where a child has registered for an Illumeet sponsored virtual
                  event, we provide the following method to allow parents to
                  access, change, or delete the personally identifiable
                  information that we have collected from their children:
                  <br />
                  <br />
                  Parents can contact Guest Services to request access to,
                  change, or delete their child’s personal information by
                  sending an email to
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="mailto:info@illumeet.com"
                  >
                    info@illumeet.com
                  </Link>
                  . A valid request to delete personal information will be
                  accommodated within a reasonable time.
                  <br />
                  <br />
                  <strong>
                    <u>Unsubscribe or Opt-Out</u>
                  </strong>
                  <br />
                  <br />
                  All website users and visitors have the option to discontinue
                  receiving communications from us by way of email or
                  newsletters. To discontinue or unsubscribe from our website
                  please send an email that you wish to unsubscribe to
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="mailto:unsubscribe@illumeet.com"
                  >
                    unsubscribe@illumeet.com
                  </Link>
                  . If you wish to unsubscribe or opt-out from any third-party
                  websites, you must go to that specific website to unsubscribe
                  or opt-out. Illumeet will continue to adhere to this Policy
                  with respect to any personal information previously collected.
                  <br />
                  <br />
                  <strong>
                    <u>Links to Other Websites</u>
                  </strong>
                  <br />
                  <br />
                  Our website does contain links to affiliates and other
                  websites. Illumeet does not claim nor accept responsibility
                  for any privacy policies, practices, and/or procedures of
                  other such websites. Therefore, we encourage all users and
                  visitors to be aware when they leave our website to read the
                  privacy statements of every website that collects personally
                  identifiable information. This Privacy Policy Agreement
                  applies only and solely to the information collected by our
                  website.
                  <br />
                  <br />
                  <strong>
                    <u>Notice to European Union Users</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet's operations are located primarily in the United
                  States. If you provide information to us, the information will
                  be transferred out of the European Union (EU) and sent to the
                  United States. (The adequacy decision on the EU-US Privacy
                  became operational on August 1, 2016. This framework protects
                  the fundamental rights of anyone in the EU whose personal data
                  is transferred to the United States for commercial purposes.
                  It allows the free transfer of data to companies that are
                  certified in the US under the Privacy Shield.) By providing
                  personal information to us, you are consenting to its storage
                  and use as described in this Policy.
                  <br />
                  <br />
                  <strong>
                    <u>Your Rights as a Data Subject </u>
                  </strong>
                  <br />
                  <br />
                  Under the regulations of the General Data Protection
                  Regulation ("GDPR") of the EU you have certain rights as a
                  Data Subject. These rights are as follows:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <strong>The right to be informed</strong>: this means we
                      must inform you of how we intend to use your personal data
                      and we do this through the terms of this Policy.{" "}
                    </li>
                    <li>
                      <strong>The right of access</strong>: this means you have
                      the right to request access to the data we hold about you
                      and we must respond to those requests within one month.
                      You can do this by sending an email to
                      <Link
                        target="_blank"
                        rel="noreferrer noopener"
                        className="PrimaryLink BaseLink"
                        to="mailto:info@illumeet.com"
                      >
                        info@illumeet.com
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>The right to rectification</strong>: this means
                      that if you believe some of the data we hold are
                      incorrect, you have the right to have it corrected. You
                      can do this by logging into your account with us, or by
                      sending us an email with your request.
                    </li>
                    <li>
                      <strong>The right to erasure:</strong> this means you can
                      request that the information we hold be deleted, and we
                      will comply unless we have a compelling reason not to, in
                      which case you will be informed of the same. You can do
                      this by sending an email to{" "}
                      <Link
                        target="_blank"
                        rel="noreferrer noopener"
                        className="PrimaryLink BaseLink"
                        to="mailto:info@illumeet.com"
                      >
                        info@illumeet.com
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>The right to restrict processing:</strong> this
                      means you can change your communication preferences or
                      opt-out of certain communications. You can do this by
                      sending an email to
                      <Link
                        target="_blank"
                        rel="noreferrer noopener"
                        className="PrimaryLink BaseLink"
                        to="mailto:info@illumeet.com"
                      >
                        info@illumeet.com
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>The right of data portability:</strong> this means
                      you can obtain and use the data we hold for your own
                      purposes without explanation. If you wish to request a
                      copy of your information, contact us at
                      <Link
                        target="_blank"
                        rel="noreferrer noopener"
                        className="PrimaryLink BaseLink"
                        to="mailto:info@illumeet.com"
                      >
                        info@illumeet.com
                      </Link>
                      .
                    </li>
                    <li>
                      <strong>The right to object:</strong> this means you can
                      file a formal objection with us regarding our use of your
                      information with regard to third parties, or its
                      processing where our legal basis is our legitimate
                      interest in it. To do this, please send an email to{" "}
                      <Link
                        target="_blank"
                        rel="noreferrer noopener"
                        className="PrimaryLink BaseLink"
                        to="mailto:info@illumeet.com"
                      >
                        info@illumeet.com
                      </Link>
                      .
                    </li>
                  </ul>
                  <br />
                  In addition to the rights above, please rest assured that we
                  will always aim to encrypt and anonymize your personal
                  information whenever possible. We also have protocols in place
                  in the unlikely event that we suffer a data breach and we will
                  contact you if your personal information is ever at risk. For
                  more details regarding our security protections see the
                  section below or visit our website at
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="https://illumeet.com"
                  >
                    https://illumeet.com
                  </Link>
                  .<br />
                  <br />
                  <strong>
                    <u>Notice of Filming and Photography</u>
                  </strong>
                  <br />
                  <br />
                  By attending an Illumeet event, you are entering an area where
                  photography, audio, and video recording may occur. By agreeing
                  to these terms, you consent to photography, audio recording,
                  video recording, and its release, publication, exhibition, or
                  reproduction to be used for promotional purposes, advertising,
                  inclusion on websites, social media, or any other purpose by
                  Illumeet and its representatives. You release Illumeet, its
                  employees, and each and all persons involved from any
                  liability connected with the taking, recording, digitizing, or
                  publication and use of interviews, photographs, computer
                  images, video and/or audio recordings, and you waive all
                  rights to any claims for payment or royalties in connection
                  with any use of these materials. You also waive any right to
                  inspect or approve any photo, video, or audio recording taken
                  by Illumeet or the person or entity designated to do so by
                  Illumeet. You acknowledge that you have been fully informed of
                  your consent, waiver of liability, and release. <br />
                  <br />
                  <strong>
                    <u>Security</u>
                  </strong>
                  <br />
                  <br />
                  Illumeet takes precautions to protect your information. When
                  you submit sensitive information via the website, your
                  information is protected both online and offline. Wherever we
                  collect sensitive information (e.g. credit card information),
                  that information is encrypted and transmitted to us in a
                  secure way. You can verify this by looking for a lock icon in
                  the address bar and looking for "https" at the beginning of
                  the address of the webpage.
                  <br />
                  <br />
                  While we use encryption to protect sensitive information
                  transmitted online, we also protect your information offline.
                  Only employees who need the information to perform a specific
                  job (for example, billing or customer service) are granted
                  access to personally identifiable information. The computers
                  and servers in which we store personally identifiable
                  information are kept in a secure environment. This is all done
                  to prevent any loss, misuse, unauthorized access, disclosure,
                  or modification of the user's personal information under our
                  control.
                  <br />
                  <br />
                  The company also uses Secure Socket Layer (SSL) for
                  authentication and private communications to build users'
                  trust and confidence in the internet and website use by
                  providing simple and secure access and communication of credit
                  card and personal information. In addition, Illumeet is a
                  licensee of TRUSTe. The website is also secured by VeriSign.
                  <br />
                  <br />
                  <strong>
                    <u>Acceptance of Terms</u>
                  </strong>
                  <br />
                  <br />
                  By using this website, you are hereby accepting the terms and
                  conditions stipulated within the Privacy Policy Agreement. If
                  you are not in agreement with our terms and conditions, then
                  you should refrain from further use of our sites. In addition,
                  your continued use of our website following the posting of any
                  updates or changes to our terms and conditions shall mean that
                  you agree and accept such changes.
                  <br />
                  <br />
                  <strong>
                    <u>How to Contact Us</u>
                  </strong>
                  <br />
                  If you have any questions or concerns regarding the Privacy
                  Policy Agreement related to our website, please feel free to
                  contact us at the following email, telephone number, or
                  mailing address.
                  <br />
                  <br />
                  <strong>Email:</strong>{" "}
                  <Link
                    target="_blank"
                    rel="noreferrer noopener"
                    className="PrimaryLink BaseLink"
                    to="mailto:info@illumeet.com"
                  >
                    info@illumeet.com
                  </Link>{" "}
                  <br />
                  <br />
                  <strong>Telephone Number:</strong> 408.579.9004 <br />
                  <br />
                  <strong>Mailing Address:</strong> <br />
                  Illumeet <br />
                  352 Shaw Rd <br />
                  South San Francisco, California 94080 <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              {!loginCheck1 ? (
                <button type="button" onClick={onCloseModal1}>
                  I Agree
                </button>
              ) : null}
            </div>
          </div>
        </div>
        {/* </div> */}
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Login;
