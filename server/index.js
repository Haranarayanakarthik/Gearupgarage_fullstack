const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT || 10000;
const EmployeeModel = require("./Models/Employee");
const CustomerModel = require("./Models/Customer");
const AppointmentModel = require("./Models/Appointmant")
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://${process.env.db_UserName}:${process.env.db_Password}@gearupgarage.sikcj3n.mongodb.net/?retryWrites=true&w=majority&appName=GearUpGarage`
);

//Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  let user = null;

  EmployeeModel.findOne({ email: email })
    .then((employee) => {
      if (employee && employee.password === password) {
        user = { name: employee.email, type: "Employee" };
        console.log("Employee login successful");
      }
    })
    .then(() => {
      if (!user) {
        CustomerModel.findOne({ email: email })
          .then((customer) => {
            if (customer && customer.password === password) {
              user = { name: customer.email, type: "Customer" };
              console.log("Customer login successful");
            }
          })
          .then(() => {
            if (user) {
              res.json({ success: true, user });
              console.log("Login Success");
            } else {
              res
                .status(401)
                .json({ success: false, message: "Invalid email or password" });
              console.log("Login failed");
            }
          })
          .catch((err) => {
            console.error("Error:", err);
            res.status(500).json("Internal Server Error");
          });
      } else {
        res.json({ success: true, user });
        console.log("Login Success");
      }
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json("Internal Server Error");
    });
});

//get appointment
app.get("/get_appointments", (req, res) => {
  AppointmentModel.find({})
    .then((appointments) => {
      res.json(appointments);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    });
});

//all appointments
app.post("/insert_appointment", (req, res) => {
  console.log(req.body);
  AppointmentModel.create(req.body)
    .then((appointment) => res.json(appointment))
    .catch((err) => res.status(500).json({ error: err.message }));
});

//get values for a specific user
app.get("/get_values_employee", (req, res) => {
  const { email } = req.query; // Access email from query parameters
  EmployeeModel.findOne({ email: email })
    .then((employee) => {
      if (employee) {
        res.send(employee);
      } else {
        res.status(404).send("Employee not found");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
    });
});

//get values for a specific user
app.get("/get_values_customer", (req, res) => {
  const { email } = req.query; // Access email from query parameters
  CustomerModel.findOne({ email: email })
    .then((employee) => {
      if (employee) {
        res.send(employee);
      } else {
        res.status(404).send("Customer not found");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Internal Server Error");
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

app.listen(port, () => {
  console.log("Server is Running");
});
