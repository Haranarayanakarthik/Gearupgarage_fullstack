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
import ForgetPassword from "./Pages/Forgetpass.jsx"
import {  Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
