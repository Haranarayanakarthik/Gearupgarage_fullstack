import React, { useState } from "react";
import "./Sidebar_cus.css"; // Ensure your styles are in this CSS file
import logo from "../../photos/logo.png";

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        className="w3-sidebar w3-bar-block w3-animate-left"
        style={{
          width: isSidebarOpen ? "250px" : "0",
          display: isSidebarOpen ? "block" : "none",
          backgroundColor: "#ff689b",
          color: "white",
          paddingTop: "10px",
          // borderRadius:"15px"
          borderRadius:"15px"
        }}
      >
        {/* <h3 className="w3-bar-item">Gear Up Garage</h3> */}
        {/* <img
          src={logo}
          style={{ padding: "10px 20px 30px 20px" }}
          width={200}
          height={30}
        /> */}
        <a href="#" className="w3-bar-item w3-button">
          Appointment
        </a>
        <a href="#" className="w3-bar-item w3-button">
          History
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Offers
        </a>
      </div>

      <div style={{ flex: 1 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          class="bi bi-arrow-left-square-fill"
          viewBox="0 0 16 16"
          className="w3-button w3-xlarge"
          onClick={handleToggleSidebar}
          style={{ rotate: isSidebarOpen ? "0deg" : "180deg" }}
        >
          <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
        </svg>
      </div>
    </div>
  );
};

export default App;
