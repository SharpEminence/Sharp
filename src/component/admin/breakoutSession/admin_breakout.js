import React, { useState, useEffect } from "react";
import AdminLayout from "../admin_Layout";
import { Link, useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
const ShowBreakout = (props) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  // -------------------------Collecting All Agenda------------------------

  const [breakout_data, setBreakoutData] = useState([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [page, setPage] = useState("");
  const [breakoutId, setBreakoutId] = useState("");
  const [profile_img, setProfileImage] = useState("");

  // -----------------------------Fetching Agenda From Server------------------
  const getBreakoutData = () => {
    fetch("/api/v1/breakout/getAll", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPage(data.total);
        console.log("data", data.total);
        setBreakoutData(data.data);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getBreakoutData();
    }, [breakout_data]);
  }, 2000);

  console.log("ADMIN_breakout_INFO=====>", breakout_data);

  //   ---------------------------------DELETE AGENDA------------------------------------

  const deleteBreakout = (postid) => {
    console.log("DeleteID", postid);
    fetch(`/api/v1/breakout/deleteBreakout/${postid}`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("DELETED SUCCESFULLY");
        console.log("DELETE RESULT===>", result);
        getBreakoutData();
        const newData = breakout_data.filter((item) => {
          return item._id !== result._id;
        });
        setBreakoutData(newData);
      });
  };

  //   -----------------------------UPDATE AGENDA----------------------------------
  const updateBreakout = (data) => {
    console.log("UpdateID========>", data.profile_img);
    // setDay(data.day);
    setTime(data.time);
    setTitle(data.title);
    setdescription(data.description);
    setBreakoutId(data._id);
    setProfileImage(data.profile_img);

    // setImage(URL.createObjectURL(data.profile_img))
    // this.setState({
    //   image: URL.createObjectURL(event.target.files[0])
    // });

    setOpen((open) => !open);
  };

  const Update_Breakout_Data = (e) => {
    console.log("UPDATE RESULT===>", breakoutId);
    fetch(`/api/v1/breakout/updateBreakout/${breakoutId}`, {
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
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("ahsgdjkas", result);
        setTimeout(() => {
          getBreakoutData();
        }, 2000);
        history.push("/admin/breakout_show");
      });
  };

  var showEditForm = () => {
    return <h1>yes done</h1>;
  };
  const searchData = (e) => {
    console.log("ee", e);
    fetch(`/api/v1/breakout/search/?q=${e}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBreakoutData(data.data);
      });
  };

  const [showPerPage, setShowPerPage] = useState(2);

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
  const BackPage = () =>{
    setOpen(false)
}
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
                <Link to="/admin/breakout_create" style={{ color: "white" }}>
                  <b>Add Session</b>
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
                    <th scope="col">Time</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {breakout_data
                    ? breakout_data.map((value) => {
                        return (
                          <tr>
                            <td>{value.time}</td>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteBreakout(value._id)}
                              >
                                <i style={{ fontSize: "24px" }} className="fa">
                                  &#xf014;
                                </i>
                              </button>
                              <br />
                              <br />

                              <div>
                                <button
                                  onClick={() => updateBreakout(value)}
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
                    <img
                      id="target"
                      src={profile_img}
                      style={{ width: "200px" }}
                    />
                    <div className="form-group">
                      <div className="upload-btn-wrapper">
                        {/* <input
                            type="file"
                            name="myfile"
                            onChange={handleChange}
                          /> */}
                        <input
                          type="file"
                          name="myfile"
                          onChange={(e) => updatePhoto(e.target.files[0])}
                        />
                      </div>
                    </div>
                    {/* <img id="target" src={this.state.image}/> */}
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
                        onChange={(e) => setdescription(e.target.value)}
                      />
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
                        textAlign: "center",
                      }}
                      onClick={Update_Breakout_Data}
                    >
                      Edit Session
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
export default ShowBreakout;
