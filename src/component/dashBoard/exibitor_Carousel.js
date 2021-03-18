import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Link } from "react-router-dom";
const Exhibitor = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 80;

  const [Exhibitor_Data, setExhibitor_Data] = useState([]);
  const [Exhibitor_Id,setExhibitor_Id]=useState("")
  console.log("ghfajdsgahgsfdhagjs",Exhibitor_Id)
  console.log("Get_Exhibitor_Data===>", Exhibitor_Data);
  //GET_EXHIBIT_HALL_DATA
  const getExhibitor_Data = () => {
    fetch("/api/v1/exhibit/getAll", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((Exbit_Data) => {
        // console.log("Get_Exhibitor_Data===>",Exbit_Data);
        setExhibitor_Data(Exbit_Data.data);
      });
  };

  var exbitor_ID= (Exhibit_id)=>{

    setExhibitor_Id(Exhibit_id)
  }

  useEffect(() => {
    getExhibitor_Data();
  }, []);

  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        gutter={20}
        leftChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrowprev.png"
              }
              alt=""
              style={{ height: "55px" }}
            />
          </button>
        }
        rightChevron={
          <button style={{ backgroundColor: "white", border: "none" }}>
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/dashbigsrrownext.png"
              }
              style={{ height: "55px" }}
              alt=""
            />
          </button>
        }
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {/* SLIDES */}
        {Exhibitor_Data.length > 0 &&
          Exhibitor_Data.map((data) => {
            return (
              <div>
                <div style={{ marginTop: "-15px", padding: "0px" }}>
                  <div className="logo-slide-item">
                    <Link to={`/exhibit_Hall/${data._id}`}> <img className="img-fluid" src={data.logo} onClick={()=>exbitor_ID(data._id)} alt="" /></Link>
                    
                  </div>
                </div>
              </div>
            );
          })}
      </ItemsCarousel>
    </div>
  );
};

export default Exhibitor;
