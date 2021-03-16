import React, { useState } from "react";

const Example = () => {
  
  var disp1=()=>{
    return(
      <h1>
        helloooooooooooooo
      </h1>
    )
  }
  var disp=()=>
  {
    console.log("hellohjhj")
    return(
      disp1
    )
  }
  return (
    <div>
      <div>Children121 </div>
     <button onClick={disp}>
        click me
     </button>
     {disp1}
    </div>
  );
};

export default Example;
