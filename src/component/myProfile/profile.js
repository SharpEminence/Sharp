import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout";

import { editUser } from "../../redux/action";

const Profile = () => {
  const dispatch = useDispatch();
  const [favAgenda, setFav] = useState([]);
  //USER DATA
  const users = useSelector((state) => state.users);
  const userdata = users.slice(-1).pop();
  console.log("useselector==========>", userdata);

  //USER FAV AGENDA
  const fav = () => {
    let id = localStorage.getItem("user_id")
    fetch(`/api/v1/agenda/getAgendaById/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("AGENDA_HEART_DATA", data.data);
        setFav(data.data);
      });
  };

  useEffect(() => {
    fav();
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  const [lastname, setLastName] = useState("");
  const [firstname, setFirstName] = useState("");
  const [profile_img, setProfileImage] = useState("");
  const [profileData, setProfileData] = useState([]);
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "insta-clone");
      data.append("cloud_name", "qw121321qweqw");
      fetch("https://api.cloudinary.com/v1_1/qw121321qweqw/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("inner", data);
          let id = localStorage.getItem("user_id")
          fetch(`/api/v1/user/updatepic/${id}`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              profile_img: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log("res", result);
              setProfileImage(result.data.profile_img);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const getProfile = () => {
    let id = localStorage.getItem("user_id")
    // console.log('uuu',userId)
    fetch(`/api/v1/user/getProfile/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProfileData(result.data);
        dispatch(editUser(result.data));
        setFirstName(result.data.profile.firstname);
        setLastName(result.data.profile.lastname);
        setProfileImage(result.data.profile.profile_img);
        setEmail(result.data.email);
      });
  };
let id = localStorage.getItem("jwt")
  console.log('uuu',id)
  console.log("profile image", profile_img);
  // handleChange(event) {
  //   this.setState({
  //     file: URL.createObjectURL(event.target.files[0])
  //   })
  // }
  const UpdateProfile = () => {
    console.log("dfdfdfdfd", profileData);
    let id = localStorage.getItem("user_id")
    fetch(`/api/v1/user/updateProfile/${id}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        firstname,
        lastname,
        profile_img,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // dispatch(editUser(result.data));
        alert("DATA UPDATED SUCCESFULLY");
        setTimeout(() => [getProfile()], 1000);
      });
  };
  const updatePhoto = (file) => {
    setImage(file);
  };
  return (
    <div>
      <Layout>
        <div className="content-sec myprofilepage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>My Profile</h2>
            </div>
            {/*----==================page main heading ends==================----*/}
            {/*----==================my profile section start==================----*/}
            <div className="user-profile-sec">
              <div className="row">
                <div className="col-md-auto col-lg-auto">
                  <div className="user-profile-left text-center">
                    <div className="user-pic">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/user-iconmyprofile.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="user-profile-name">
                      <img style={{ width: "200px" }} src={profile_img} />
                      <h2>user profile</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md col-lg">
                  <div className="user-profile-right">
                    <form className="updt-prfl">
                      <div className="form-gorup d-flex align-items-center">
                        <label>First name:</label>
                        <input
                          defaultValue
                          type="text"
                          placeholder
                          className="form-control"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstname}
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center">
                        <label>Last name:</label>
                        <input
                          defaultValue
                          type="text"
                          placeholder
                          className="form-control"
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastname}
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center">
                        <label>Email Address:</label>
                        <input
                          defaultValue
                          type="email"
                          placeholder
                          disabled={true}
                          className="form-control"
                          value={email}
                        />
                      </div>
                      <div className="form-gorup d-flex align-items-center uploadimageprofile">
                        <label>Photo:</label>
                        <div className="upload-btn-wrapper">
                          <button className="btn">choose File</button>
                          {/* <input
                            type="file"
                            name="myfile"
                            onChange={handleChange}
                          /> */}
                          <input
                            type="file"
                            onChange={(e) => updatePhoto(e.target.files[0])}
                          />
                        </div>
                      </div>
                      <div className="form-gorup d-flex align-items-center justify-content-end updt-btn">
                        <button onClick={UpdateProfile}>update profile </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*----==================my profile section ends==================----*/}
            {/*----==================agenda listing section start==================----*/}
            <div className="agendalistheading">
              <div className="myagendaheadingmp">MY AGENDA</div>
              <h1 className="mpagendahead d-flex align-items-center justify-content-between">
                Saturday, April 24, 2021
              </h1>
            </div>
            <div className="cmnlistwrap agendalistwrap red-box">
              {favAgenda.map((value) => {
                return (
                  <div className="cmnlist row">
                    <div className="col-lg-12 p-0">
                      <div className="agendatxtwraper">
                        <div className="cmnlisttxt">
                          <h2>{value.time}</h2>
                        </div>
                        <div className="agndatxtouter d-flex">
                          <div className="cmnlisttxt col">
                            <h3>
                              {value.title}
                              <span className="hrt-img">
                                <img
                                  className
                                  src={
                                    process.env.PUBLIC_URL +
                                    "/assets/images/heartfill-2.png"
                                  }
                                />
                              </span>
                            </h3>
                            <h3>{value.description}</h3>
                            {/*<div class="faq-excert ">
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
</div>*/}
                          </div>
                          <div className="agendabtnwrap text-right col-auto p-0">
                            <a className="faqbtn agendabtn" href="#">
                              Learn More <span>&gt;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/*----==================agenda listing section ends==================----*/}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Profile;
