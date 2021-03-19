import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link, useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
const ShowExhibit = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  // -------------------------Collecting All Agenda------------------------

  const [exhibit_data, setExhibitData] = useState([]);
  const [logo, setLogo] = useState("");
  const [flipbook, setFlipBook] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState([{ value: null }]);
  const [video, setVideo] = useState([]);
  const [exhibitId, setExhibitId] = useState("");
  const [image, setImage] = useState("");

  // -----------------------------Fetching Agenda From Server------------------
  const getExhibitData = () => {
    fetch("/api/v1/exhibit/getAll", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.total);
        setExhibitData(data.data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getExhibitData();
    }, [exhibit_data]);
  }, 2000);

  console.log("ADMIN_breakout_INFO=====>", exhibit_data);

  //   ---------------------------------DELETE AGENDA------------------------------------

  const deleteExhibit = (postid) => {
    console.log("DeleteID", postid);
    fetch(`/api/v1/exhibit/deleteExhibit/${postid}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("DELETED SUCCESFULLY");
        console.log("DELETE RESULT===>", result);
        getExhibitData();
        const newData = exhibit_data.filter((item) => {
          return item._id !== result._id;
        });
        getExhibitData(newData);
      });
  };

  //   -----------------------------UPDATE AGENDA----------------------------------
  const updateExhibit = (data) => {
    console.log("UpdateID========>", data);
    // setDay(data.day);
    setUrl({ value: "hrllloooooo" });
    setUrl(data.url);
    setVideo(data.video);
    setContent(data.content);
    setTitle(data.title);
    setFlipBook(data.flipbook);
    setLogo(data.logo);
    setExhibitId(data._id);
    setOpen((open) => !open);
  };

  const Update_Exhibit_Data = (e) => {
    console.log("UPDATE RESULT===>", exhibitId);
    fetch(`/api/v1/exhibit/updateExhibit/${exhibitId}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        video,
        url,
        flipbook,
        title,
        content,
        logo,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("ahsgdjkas", result);
        setTimeout(() => {
          getExhibitData();
        }, 2000);
        history.push("/admin/exhibit_show");
      });
  };

  const searchData = (e) => {
    console.log("ee", e);
    fetch(`/api/v1/exhibit/search/?q=${e}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setExhibitData(data.data);
      });
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
  const updateVideo = (file) => {
    console.log("file", file);
  };

  const BackPage = () => {
    setOpen(false);
  };
  const handleChangeUrl = (i, event) => {
    console.log("i", i);
    const values = [...url];
    console.log("vvv", values);
    values[i].value = event.target.value;
    setUrl(values);
  };
  const handleAddUrl = () => {
    console.log("addval", url);
    const values = [...url];
    values.push({ value: null });

    setUrl(values);
  };
  const handleRemoveUrl = (i) => {
    const values = [...url];
    values.splice(i, 1);
    setUrl(values);
  };
  console.log("url", url);
  return (
    <div>
      <AdminLayout>
        <div style={{ padding: "150px", width: "1200px" }}>
          <div></div>
          {open ? null : (
            <>
              <div class="form-group has-search">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here"
                  onChange={(e) => searchData(e.target.value)}
                />
              </div>
              <button
                className="btn btn-sm btn-warning "
                style={{ float: "right", background: "#10daef" }}
              >
                <Link to="/admin/exhibit_create" style={{ color: "white" }}>
                  <b>Add Exhibitiors</b>
                </Link>
              </button>
              <table
                class="table table-bordered"
                style={{
                  marginTop: "80px",
                  fontFamily: "arial",
                  marginBottom: "200px",
                  borderCollapse: "collapse",
                }}
              >
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {exhibit_data
                    ? exhibit_data.map((value) => {
                        return (
                          <tr>
                            <td>{value.title}</td>
                            <td>{value.content}</td>

                            <td>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteExhibit(value._id)}
                              >
                                <i style={{ fontSize: "24px" }} className="fa">
                                  &#xf014;
                                </i>
                              </button>
                              <br />
                              <br />

                              <div>
                                <button
                                  onClick={() => updateExhibit(value)}
                                  className="btn btn-sm btn-primary "
                                >
                                  <i
                                    style={{ fontSize: "24px" }}
                                    className="material-icons"
                                  >
                                    &#xe254;
                                  </i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </>
          )}
          {/* <Pagination
            showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={page}
            agendaData={agenda}
          /> */}
          <div>
            {open ? (
              <div>
                <div style={{ marginTop: "50px" }}>
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

                    {/* <img id="target" src={this.state.image}/> */}

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
                    <img id="target" src={logo} style={{ width: "200px" }} />
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
                      <label htmlFor="exampleInputPassword1">SITE URL</label>
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
                      {/* <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Description"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                      /> */}
                    </div>

                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Videos</label>
                      <div className="upload-btn-wrapper">
                        <input
                          type="file"
                          name="myfile"
                          multiple
                          onChange={(e) => updateVideo(e.target.files[0])}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-warning d-flex justify-content-center"
                      style={{
                        color: "white",
                        background: "#10daef",
                        textAlign: "center",
                      }}
                      onClick={BackPage}
                    >
                      Back
                    </button>
                    <button
                      className="btn btn-warning d-flex justify-content-center"
                      style={{
                        color: "white",
                        background: "#10daef",
                      }}
                      onClick={Update_Exhibit_Data}
                    >
                      Edit Exhibitor
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};
export default ShowExhibit;
