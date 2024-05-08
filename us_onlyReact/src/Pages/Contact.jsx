import React from "react";

const cardStyle = {
  backgroundColor: "#272525",
  color: "white",
  borderRadius: "8%",
  padding: "16px",
  textAlign: "center",
};

const contactInfoStyle = {
  display: "flex",
  alignItems: "center",
  marginTop: "3px",
};

const iconStyle = {
  color: "#C92A2A",
  fontSize: "55px",
  margin: "12px",
};

const hrStyle = {
  borderTop: "8px dashed rgb(160 157 157)",
  borderBottomWidth: "0px"
};
const parar ={
    letterSpacing:"0.00938em",margin:0,
    fontSize:"1.25rem",
    fontWeight:500
  }
const OutlinedCard = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #F47F8F 40%, rgba(0,0,0,0) 20%)",
        zIndex: -20,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "90%", maxWidth: "500px" }}>
        <div style={cardStyle}>
          <h2>Contact Us</h2>
          <div style={contactInfoStyle}>
            <span style={iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                class="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />{" "}
              </svg>
            </span>
            <h5 style={parar}>Neeru Konda, Amaravati, Andhra Pradesh 522502</h5>
          </div>
          <hr style={hrStyle} />
          <div style={contactInfoStyle}>
            <span style={iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                class="bi bi-phone-fill"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />{" "}
              </svg>
            </span>
            <h5 style={parar}>7981387061</h5>
          </div>
          <hr style={hrStyle} />
          <div style={contactInfoStyle}>
            <span style={iconStyle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                fill="currentColor"
                class="bi bi-globe-central-south-asia"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" />{" "}
              </svg>
            </span>
            <h5 style={parar}>GearUpGarage.com</h5>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default OutlinedCard;
