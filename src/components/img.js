import React from "react";

function Img(props) {
  return (
    <div>
      <div>
        <img src={props.url} alt={props.title}></img>
        <p>{props.date}</p>
      </div>
    </div>
  );
}

export default Img;
