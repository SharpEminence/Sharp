import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// import M from "materialize-css";
const AdminLogin = () => {
  const history = useHistory();
  //FORM DATA
  const [adminEmail, setEmail] = useState("");
  const [adminPassword, setPasword] = useState("");
  console.log("LOGIN_INPUT====>", adminEmail, adminPassword);

  const PostData = () => {
    //console.log("heloo Login");
    fetch("/api/v1/auth/admin/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: adminPassword,
        email: adminEmail,
      }),
    })
      .then((res) => res.json())
      .then((adminData) => {
        console.log("ADMIN_LOGIN_DATA====>", adminData);

        if (adminData.data.token) {
          localStorage.setItem("jwt", adminData.data.token);
          localStorage.setItem("user", JSON.stringify(adminData.data.user));
          //dispatch({type:"USER",payload:data.user})
          // M.toast({
          //   html: "LOGIN SUCCESSFULL !",
          //   classes: "#43a047 green darken-1",
          // });
          history.push("/admin/dashBoard");
        } else {
          history.push("/Login");

          // M.toast({ html: "LOGIN FAILED !", classes: "#c62828 red darken-3" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
                    </div>
                  </div>
                  <div className="loginFormField">
                    <div className="loginTitle">
                      <h2>ADMIN LOGIN</h2>
                    </div>
                    <form className="formField">
                      <div className="form-group">
                        <label>E-MAIL ADDRESS</label>
                        <input
                          type="email"
                          className="form-control"
                          value={adminEmail}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>PASSWORD</label>
                        <input
                           type="password"
                          className="form-control"
                          value={adminPassword}
                          onChange={(e) => setPasword(e.target.value)}
                        />
                      </div>
                      <div className="checkBoxBtn">
                        <button
                          type="button"
                          className="loginBtn btn-lg btn-block"
                          data-toggle="modal"
                          data-target="#cmn-popup"
                          style={{ height: "25px" }}
                          onClick={() => PostData()}
                        >
                          Login
                        </button>
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
