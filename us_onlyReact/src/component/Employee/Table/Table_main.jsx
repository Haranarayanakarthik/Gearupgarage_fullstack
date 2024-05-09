import React from "react";
import MyTable from "./table";
import Sidebar from "../Sidebar_Emp/Sidebar_Emp";
function App() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{width:"100vw"}}>
          <h1 style={{textAlign:"center"}}>My Table</h1>
          <MyTable />
        </div>
      </div>
    </div>
  );
}

export default App;
