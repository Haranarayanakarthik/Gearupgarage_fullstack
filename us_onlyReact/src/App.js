import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Contact from "./Pages/Contact";
import Service from "./Pages/Services";
import Home from "./Pages/Home/Home";
import Faq from "./Pages/Faq/Faq";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Sign Up/SignUp";
import About from "./Pages/About/About.jsx";
import Table from "./component/Employee/Table/Table_main.jsx";
import ForgetPassword from "./Pages/Forgetpass.jsx";
import Sidebar from "./component/Sidebar_Cus/Sidebar_cus.jsx";
import Dashboard from "./component/Customer/Dashboard_cus.jsx";
import Dashboard_emp from "./component/Employee/Dashboard_emp.jsx";
import Appointment from "./component/Customer/Forma.jsx"
import Settings_cus from "./component/Customer/Settings/Settings_Cus.jsx";
import Settings_Emp from "./component/Employee/Settings/Settings_Emp.jsx";
function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/dashboard_cus" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/dashboard_emp" element={user ? <Dashboard_emp user={user} /> : <Navigate to="/login" />} />
          <Route path="/Settings_cus" element={user ? <Settings_cus user={user} /> : <Navigate to="/login" />} />
          <Route path="/Today_orders_emp" element={user ? <Table user={user} /> : <Navigate to="/login" />} />
          <Route path="/Appointment" element={user ? <Appointment user={user} /> : <Navigate to="/login" />} />
          <Route path="/Settings_emp" element={user ? <Settings_Emp user={user} /> : <Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
        <Footer />
      
    </div>
  );
}

export default App;
