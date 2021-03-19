import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link, useHistory } from "react-router-dom";
import Input from "./Input";
const CreateExhibitor = (props) => {
  const history = useHistory();
  const [exhibit_data, setExhibitData] = useState([]);
  const [logo, setLogo] = useState("");
  const [flipbook, setFlipBook] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [exhibitId, setExhibitId] = useState("");
  const [image, setImage] = useState("");

  const PostData = () => {
      const urls = url.map((d)=>{return d.value})
      const videos = video.map((d)=>{return d.value})
    fetch("/api/v1/exhibit/createExhibit", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title,
        content,
        logo,
        video:videos,
        url:urls,
        flipbook,
      }),
    });
    history.push("/admin/exhibit_show");
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
          setLogo(data.url);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);

  const updatePhoto = (file) => {
    setImage(file);
  };

  const [url, setUrl] = useState([{ value: null }]);
  const [video, setVideo] = useState([{ value: null }]);
  const handleChangeUrl = (i, event) => {
    const values = [...url];
    values[i].value = event.target.value;
    setUrl(values);
  };
  const handleChangeVideo = (i, event) => {
    const values = [...video];
    values[i].value = event.target.value;
    setVideo(values);
  };

  const handleAddUrl = () => {
    const values = [...url];
    values.push({ value: null });
    setUrl(values);
  };
  const handleAddVideo = () => {
    const values = [...video];
    values.push({ value: null });
    setVideo(values);
  };

  const handleRemoveVideo = (i) => {
    const values = [...video];
    values.splice(i, 1);
    setVideo(values);
  };
  const handleRemoveUrl = (i) => {
    const values = [...url];
    values.splice(i, 1);
    setUrl(values);
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
                ADD EXHIBITORS
              </h1>
              <br></br>
              <form>
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
                  <label htmlFor="exampleInputPassword1">Content</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Description"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>
                {/* <img id="target" src={profile_img}/> */}
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Logo</label>
                  <div className="upload-btn-wrapper">
                    <input
                      type="file"
                      name="myfile"
                      onChange={(e) => updatePhoto(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">URL</label>
                  <button type="button" onClick={() => handleAddUrl()}>
                    Add
                  </button>

                  {url.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`}>
                        <input
                          type="text"
                          className="form-control"
                          value={field.value || ""}
                          onChange={(e) => handleChangeUrl(idx, e)}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveUrl(idx)}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">FlipBook</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Title"
                    value={flipbook}
                    onChange={(e) => setFlipBook(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Video Url</label>
                  <button type="button" onClick={() => handleAddVideo()}>
                    Add
                  </button>

                  {video.map((field, idx) => {
                    return (
                      <div key={`${field}-${idx}`}>
                        <input
                          type="text"
                          className="form-control"
                          value={field.value || ""}
                          onChange={(e) => handleChangeVideo(idx, e)}
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveVideo(idx)}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </div>

                <button
                  type="submit"
                  className="btn btn-warning btn-block "
                  style={{ background: "#10daef" }}
                  onClick={() => PostData()}
                >
                  Add Exhibitor
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
export default CreateExhibitor;
