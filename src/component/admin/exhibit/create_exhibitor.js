import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link, useHistory } from "react-router-dom";
import Input from './Input'
const CreateExhibitor = (props) => {
  const history = useHistory();
  const [exhibit_data, setExhibitData] = useState([]);
  const [logo, setLogo] = useState("");
  const [flipbook, setFlipBook] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState([]);
  const [video, setVideo] = useState([]);
  const [exhibitId, setExhibitId] = useState("");
  const [image, setImage] = useState("");

  const PostData = () => {
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
        video,
        url,
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
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState(['input-0']);

//   const ChangeData = () => {
//     const inputValues = inputValues;
//     inputValues[name] = value;
//     setInputValues({ inputValues });
//   };
  const handleInputChange = (len) => {
      setShow(true)
    var newInput = `input-${inputs.length}`;
    setInputs(inputs,...newInput)
    
    // setInputs(prevState => ({ inputs: prevState.inputs.concat([newInput]) }))
   
  };
  console.log('nnnn',inputs)
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
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Title"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                {show?<div id="dynamicInput">
                       {inputs.map(input => <Input key={input} />)}
                   </div>:null}
                
            
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
                  <label htmlFor="exampleInputPassword1">Video</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Title"
                    value={video}
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning btn-block "
                  style={{ background: "#10daef" }}
                  onClick={() => PostData()}
                >
                  Add Exhibitor
                </button>
                <button type ="button" onClick={()=>handleInputChange()}>Add</button>
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
