import React from "react";
import Image from "./about.jpg";
const content = {
  padding: "30px",
  width: "50%",
};
const firstdiv = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  backgroundImage: `url(${Image})`,
  height: "20vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
const heading = {
  color: "white",
  fontSize: "34pt",
  paddingBottom: "15px",
};
const AboutUs = () => {
  return (
    <div>
      <div style={firstdiv}>
        <h1 style={heading}>About Us</h1>
      </div>
      <div style={content}>
        <div>
          <h2>Welcome To Gear Up Garage</h2>
          <p>
            Gear Up Garage aims to revolutionize motor servicing and automotive
            repairs by providing convenience, reliability, and expertise to
            ensure your vehicle remains in top condition.
          </p>
        </div>
        <div>
          <h2>Our Story</h2>
          <p>
            Gear Up Garage, founded by automotive enthusiasts, simplifies
            vehicle maintenance and repair by empowering users to take control
            of their vehicle's care.
          </p>
        </div>
        <div>
          <h2>What We Offer </h2>
          <p>
            Gear Up Garage offers a wide range of automotive services, including
            routine maintenance, diagnostics, and emergency repairs, with a
            skilled network of technicians.
          </p>
        </div>
        <div>
          <h2>Why Choose Us</h2>
          <p>
            <strong>Convenience</strong>: With Gear Up Garage, you can
            conveniently schedule motor servicing or repairs at your
            convenience, whether at home, work, or on the road.
            <br />
            <br />
            <strong>Expertise</strong>: Our mechanics are highly trained and
            certified to provide top-quality service to ensure your vehicle's
            safety <br />
            and comfort
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
