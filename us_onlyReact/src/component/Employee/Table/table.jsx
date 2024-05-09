import React, { useState } from "react";
import "./MyTable.css"; // Import CSS file for table styling

function MyTable() {
  return (
    <table className="my-table" style={{width:"100%",marginRight:"20px"}}>
      <thead>
        <tr>
          <th>S No</th>
          <th>Service</th>
          <th>Address</th>
          <th>Payment method</th>
          <th>Completion</th>
          <th>Complaints</th>
          <th>Submit</th>
        </tr>
      </thead>
      <tbody>
        <th>1</th>
        <th>Service</th>
        <th>Address</th>
        <th>
          <select name="Payment" id="Payment" required>
            <option value="" disabled selected>
              Payment
            </option>
            <option value="Cash">Cash</option>
            <option value="Money">Money</option>
          </select>
        </th>
        <th>
        <select name="Complete" id="Complete" required>
            <option value="" disabled selected>
            Complete
            </option>
            <option value="Completed">Completed</option>
            <option value="Not Completed">Not Completed</option>
          </select>
        </th>
        <th>
          <input type="text" />
        </th>
        <th>
          <input type="submit" value="Submit"/>
        </th>
      </tbody>
    </table>
  );
}

export default MyTable;
