const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./Models/Employee");
const CustomerModel = require("./Models/Customer");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.db_UserName}:${process.env.db_Password}@gearupgarage.sikcj3n.mongodb.net/?retryWrites=true&w=majority&appName=GearUpGarage`
);

//Login
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    let success = false; // Corrected variable name
    let Employee = "Password Not Correct";
    EmployeeModel.findOne({ email: email }).then((employee) => {
      if (employee && employee.password === password) {
        success = true;
        Employee = "You are Employee";
        console.log("Employee login successful");
      }
    }).then(() => { // chaining promise to execute next findOne
      if (!success) { // If success is already true, no need to search further
        CustomerModel.findOne({ email: email }).then((customer) => {
          if (customer && customer.password === password) {
            success = true;
            Employee = "You are Customer"
            console.log("Customer login successful");
          }
        }).then(() => {
          if (success) {
            res.json(Employee);
            console.log("Login Success");
          } else {
            res.status(401).json("Invalid email or password");
            console.log("Login failed");
          }
        }).catch(err => {
          console.error("Error:", err);
          res.status(500).json("Internal Server Error");
        });
      } else { // success is true, so there's no need to continue searching
        res.json(Employee);
        console.log("Login Success");
      }
    }).catch(err => {
      console.error("Error:", err);
      res.status(500).json("Internal Server Error");
    });
  });
  

//Forgot Password
app.post("/forgetPassword", (req, res) => {
  const { first_name, last_name, email } = req.body;
  CustomerModel.findOne({
    email: email,
    first_name: first_name,
    last_name: last_name,
  }).then((user) => {
    if (user) {
      res.json(user.password);
      console.log("User Found");
    } else {
      res.json("Can't Find The User");
      console.log("Login Can't Find The User");
    }
  });
});

//Customer Registration
app.post("/Customer_register", (req, res) => {
  console.log(req.body);
  CustomerModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

//Employee Registration
app.post("/Employee_register", (req, res) => {
  console.log(req.body);
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is Running");
});
