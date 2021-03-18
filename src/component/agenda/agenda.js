import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../layout";
import { Link } from "react-router-dom";
import Like from "./Like";
import LoadingSpinner from "../../common/LoadingSpinner";

const Agenda = (props) => {
  const users = useSelector((state) => state.users);

  const [open, setOpen] = useState(false);
  const [read_More, setReadMore] = useState(false);
  const [agenda, setAgenda] = useState([]);
  const [favHeart, setFavHeart] = useState(false);
  // console.log("AGENDA_FAV_DATA",fav)
  const [heartData, setHeartData] = useState([]);
  const [heartLocal, setHeartLocal] = useState(false);
  const [click, setClick] = useState(false);
  const [favId, setFavId] = useState([]);
  const onSlide = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      // console.log('new',newState)
      for (const property in newState) {
        setHeartData(newState);
        setClick(newState[property]);
        setFavId(property);
      }

      return newState;
    });

    fetch("/api/v1/agenda/addFavouriteAgenda", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        agenda_id: inputName,
        user_id: users[0].user._id,
        status: click,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("resp", data.data.status);
        setHeartLocal(data.data.status);
      });
    for (const prop in heartData) {
      setFavHeart(`${heartData[prop]}`);
      console.log(`${heartData[prop]}`);
    }
  };

  console.log("dhdhdh", click);
  //GETTING ALL AGENDA
  const [loader, setLoader] = useState(true);
  const [favIdData,setfavData] = useState([])
  // useEffect(()=>{
  //   getAgendaId()
  // },[])
  // const getAgendaId = () =>{
  //   let id = localStorage.getItem("user")
    
  //   fetch(`/api/v1/agenda/getAgendaById/${id._id}`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       let dt = data.data.map((d)=>{
  //         return d.agenda_id
  //       })
  //       console.log('dt',dt)
  //     });
  // }
  const getAgendaData = () => {
    fetch("/api/v1/agenda/getAllAgenda", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAgenda(data.data);
        setLoader(false);
      });
  };
  const [checked, setChecked] = useState({});
  useEffect(() => {
    getAgendaData();
  }, []);

  const toggleCheck = (inputName) => {
    let arr = [];
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      // console.log('new',newState)
      for (const property in newState) {
        setClick(newState[property]);
        setFavId(property);
      }

      return newState;
    });
  };

  const handleLike = (inputName) => {
    // const agendas = [...agenda];
    // const index = agendas.indexOf(val);
    // agendas[index] = { ...agendas[index] };
    // agendas[index].status = !agendas[index].status;
    // setChecked(agendas);
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];

      return newState;
    });
  };
  //READ MORE
  const readMore = (data) => {
    setReadMore((read_More) => !read_More);
  };
  return (
    <div>
      <Layout>
        {loader ? <LoadingSpinner /> : null}
        <div className="content-sec agendapage sideSpacing_allPage">
          <div className="container">
            {/*----==================page main heading start==================----*/}
            <div className="page-heading">
              <h2>Agenda</h2>
              <div className="viewagendabtn">
                <Link to="/profile">View My Agenda</Link>
              </div>
            </div>
            <div>
              {agenda.map((value) => {
                return (
                  <div key={value._id}>
                    <div className="agendalistheading">
                      <h1>{value.day}</h1>
                    </div>
                    <div className="cmnlistwrap agendalistwrap red-box">
                      <div className="cmnlist row">
                        <div className="col-lg-12 p-0">
                          <div className="agendatxtwraper">
                            <div className="cmnlisttxt">
                              <h2>{value.time}</h2>
                            </div>
                            <div className="agndatxtouter d-flex">
                              <div className="cmnlisttxt col" key={value._id}>
                                <h3>
                                  {value.title}

                                  <span
                                    key={value._id}
                                    onClick={(e) => {
                                      onSlide(value._id);
                                    }}
                                    // onClick={() => toggleCheck(value._id)}
                                    // checked={true}
                                  >
                                    {/* <Like
                                      liked={checked}
                                      onClick={() => handleLike(value)}
                                    /> */}
                                    {value._id === favId &&
                                    (heartLocal && click) === true ? (
                                      <span className="hrt-img">
                                        <img
                                          className
                                          src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/heartfill-2.png"
                                          }
                                        />
                                      </span>
                                    ) : (
                                      <span
                                        className="hrt-img"
                                        value={heartLocal}
                                      >
                                        <img
                                          className
                                          src={
                                            process.env.PUBLIC_URL +
                                            "/assets/images/heart-empty.png"
                                          }
                                        />
                                      </span>
                                    )}
                                  </span>
                                </h3>
                                <h3>Main Stage</h3>
                                <div className="faq-excert ">
                                  <p>
                                    {read_More
                                      ? value.description.substring(0, 0)
                                      : value.description}
                                  </p>
                                </div>
                              </div>
                              <div className="agendabtnwrap text-right col-auto p-0">
                                <a
                                  className="faqbtn agendabtn"
                                  href="#"
                                  onClick={(e) => readMore(value)}
                                >
                                  Learn More{" "}
                                  {read_More ? (
                                      <span
                                        style={{ transform: "rotate(270deg)" }}
                                      >
                                        &gt;
                                      </span>
                                    ) : (
                                      <span>&gt;</span>
                                    )}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Agenda;
