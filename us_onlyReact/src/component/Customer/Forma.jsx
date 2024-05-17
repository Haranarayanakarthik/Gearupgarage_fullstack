import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./form_style.css";
import Sidebar from "../Sidebar_Cus/Sidebar_cus";
export default function AnimatedMulti({ user }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [waitingPeriod, setWaitingPeriod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);

  const animatedComponents = makeAnimated();
  const options = [
    { value: "Breaks", label: "Breaks" },
    { value: "oil/lube/filters", label: "oil/lube/filters" },
    { value: "suspensions", label: "suspensions" },
    { value: "detailing", label: "detailing" },
    { value: "diagnostics", label: "diagnostics" },
    { value: "dent and paint", label: "dent and paint" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mail = user.name;
    const date = new Date();
    const complete = false;
    
  const backendUrl = process.env.REACT_APP_Backend_URL;
    const data = {
      email: mail,
      address,
      problem: selectedOptions,
      phoneNumber,
      price,
      date,
      completed: complete,
    };
    try {
      const response = await fetch(`${backendUrl}/insert_appointment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      alert("Appointment Stored Sucessfully");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
    // Calculate price based on selected options
    let totalPrice = 0;
    selectedOptions.forEach((option) => {
      if (option.value === "Breaks") {
        totalPrice += 500;
      } else if (option.value === "oil/lube/filters") {
        totalPrice += 600;
      } else if (option.value === "suspensions") {
        totalPrice += 200;
      } else if (option.value === "detailing") {
        totalPrice += 300;
      } else if (option.value === "diagnostics") {
        totalPrice += 900;
      } else if (option.value === "dent and paint") {
        totalPrice += 1000;
      }
      // Add more conditions for other options if needed
    });
    setPrice(totalPrice);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="container">
        <h1 style={{ textAlign: "center" }}>Appointment:</h1>
        <form onSubmit={handleSubmit}>
          <div className="select_container">
            <div>
              <label>
                <b>Problem:</b>
              </label>
            </div>
            <div>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                options={options.map((option) => ({
                  value: option.value,
                  label: option.label,
                }))}
                isMulti
                onChange={handleSelectChange}
                className="select"
              />
            </div>
          </div>
          <label htmlFor="waitingPeriod">
            <b>Waiting period:</b>
          </label>
          <input
            type="text"
            name="waitingPeriod"
            value={waitingPeriod}
            onChange={(e) => setWaitingPeriod(e.target.value)}
            className="pink-input"
            style={{ marginLeft: "34px" }}
            required
          />
          <br />

          <label htmlFor="phoneNumber">
            <b>Phone Number:</b>
          </label>
          <input
            type="number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="pink-input"
            style={{ marginLeft: "30px" }}
            required
          />
          <br />

          <label htmlFor="address">
            <b>Address:</b>
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="pink-input"
            style={{ marginLeft: "79px" }}
            required
          />
          <br />

          <label htmlFor="price">
            <b>Price:</b>
          </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="pink-input"
            style={{ marginLeft: "103px" }}
            readOnly
          />
          <br />

          <input type="submit" value="submit" className="submit" />
        </form>
      </div>
    </div>
  );
}
