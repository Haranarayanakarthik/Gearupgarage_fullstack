
import React from "react";
import Img from "./photos/bgsec_1.png";

function Heading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundImage: `url(${Img})`,
        height: "20vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h3
        style={{
          color: "white",
          fontSize: "34pt",
          paddingBottom: "15px",
        }}
      >
        Services
      </h3>
    </div>
  );
}

export default Heading;

