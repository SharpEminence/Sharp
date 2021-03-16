import React from "react";

const Like = (props) => {
  console.log("props", props);
  //   for (const [key, value] of Object.entries(props.liked)) {
  //     console.log(`${key}: ${value}`);
  //   }
  const data = () => {
    // alert("hj");
  };
  let classes = process.env.PUBLIC_URL + "/assets/images/heartfill-2.png";
  if (!props.fav)
    classes = process.env.PUBLIC_URL + "/assets/images/heart-empty.png";
  console.log("classes", classes);
  return (
    <div key={props.favId}>
      <span className="hrt-img"  onClick={data}>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/heartfill-2.png"}
         
          // onClick={() => props(value._id)}
        />
      </span>
    </div>
  );
};

export default Like;
