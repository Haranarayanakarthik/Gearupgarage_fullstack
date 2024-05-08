const mongoose = require("mongoose");
const employeeSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String
})

const EmployeeModel=mongoose.model("employees",employeeSchema)
module.exports=EmployeeModel