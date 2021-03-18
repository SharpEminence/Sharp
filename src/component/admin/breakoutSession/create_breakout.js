import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link, useHistory } from "react-router-dom";
const CreateBreakout = (props) => {
  const history = useHistory();
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [profile_img, setProfileImage] = useState("");
  const [image, setImage] = useState("");

  const PostData = () => {
    fetch("/api/v1/breakout/createBreakout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        time,
        title,
        description,
        profile_img,
      }),
    });
    history.push("/admin/breakout_show");
  };

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
          setProfileImage(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const updatePhoto = (file) => {
    setImage(file);
  };
  return (
    <div>
      <AdminLayout>
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>

            <div
              className="col-md-4"
              style={{ marginBottom: "300px", marginTop: "100PX" }}
            >
              <h1 className="text-center" style={{ color: "#10daef" }}>
                {" "}
                ADD SESSION
              </h1>
              <br></br>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Description</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                {/* <img id="target" src={profile_img}/> */}
                <div className="form-group">
                  <div className="upload-btn-wrapper">
                    <input
                      type="file"
                      name="myfile"
                      onChange={(e) => updatePhoto(e.target.files[0])}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-warning btn-block "
                  style={{ background: "#10daef" }}
                  onClick={() => PostData()}
                >
                  Add Session
                </button>
              </form>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};
export default CreateBreakout;
