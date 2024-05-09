// Dashboard Component
import React from "react";
import Sidebar from "../Sidebar_Cus/Sidebar_cus"
const Dashboard = ({ user }) => {
  return (
<div style={{ display: "flex" }}>
    <Sidebar/>
    <div>
        <h2>Welcome, {user.name}</h2>
        <p>User Type: {user.type}</p>
        {/* Add other dashboard content here */}
    </div>
</div>
  );
};

export default Dashboard;
