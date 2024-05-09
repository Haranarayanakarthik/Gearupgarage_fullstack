import React, { useEffect, useState } from "react";
import "./MyTable.css"; // Import CSS file for table styling

function MyTable() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/get_appointments")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, []);

  return (
    <table className="my-table" style={{ width: "100%", marginRight: "20px" }}>
      <thead>
        <tr>
          <th>S No</th>
          <th>Service</th>
          <th>Address</th>
          <th>Payment</th>
          <th>PhoneNumber</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td style={{textAlign:"center"}}>{index + 1}</td>
            {/* Map over the problem array and display either value or label */}
            <td style={{textAlign:"center"}}>
              {appointment.problem.map((problem, idx) => (
                <span key={idx}>{problem.value}<br/></span>
              ))}
            </td>
            <td style={{textAlign:"center"}}>{appointment.address}</td>
            <td style={{textAlign:"center"}}>
            {appointment.price}
            </td>
            <td style={{textAlign:"center"}}>
            {appointment.phoneNumber}
            </td>
            <td style={{textAlign:"center"}}>
            {appointment.email}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
