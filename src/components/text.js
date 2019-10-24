import React from "react";

function Text(props) {
  return (
    <div className="text">
      <h2>{props.title}</h2>
      <p>{props.explanation}</p>
    </div>
  );
}

export default Text;
