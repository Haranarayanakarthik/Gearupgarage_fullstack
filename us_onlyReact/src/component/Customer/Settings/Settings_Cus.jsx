import React, { useEffect, useState } from "react";
import "./Settings_Cus.css";
import Sidebar from "../../Sidebar_Cus/Sidebar_cus";
const Settings_Emp = ({ user }) => {
  const [userData, setUserData] = useState(null);
  
  const backendUrl = process.env.REACT_APP_Backend_URL;
  console.log(backendUrl);  
  useEffect(() => {
    const fetchData = async () => {
      const data = { email: user.name };

      try {
        const response = await fetch(
          `${backendUrl}/get_values_customer?email=${data.email}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
        setUserData(result); // Assuming result contains user data
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [user.name]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="Settings_Container">
        <div>
          <h2>Account</h2>
        </div>
        <div>
          <label>First Name:</label>
          <input
            className="fname"
            type="text"
            defaultValue={userData.first_name}
            readOnly
          />
          <br />
          <label>Last Name:</label>
          <input
            className="lname"
            type="text"
            defaultValue={userData.last_name}
            readOnly
          />
          <br />
          <label>Email :</label>
          <input
            className="email"
            type="text"
            defaultValue={userData.email}
            readOnly
          />
          <br />
          <label>Password:</label>
          <input
            className="password"
            type="text"
            defaultValue={userData.password}
            readOnly
          />
          <br />
        </div>
        <div>
          <input type="submit" value="View" />
        </div>
      </div>
    </div>
  );
};

export default Settings_Emp;
