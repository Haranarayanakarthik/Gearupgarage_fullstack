const mongoose = require("mongoose");
const customerSchema=new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String
})

const CustomerModel=mongoose.model("customer",customerSchema)
module.exports=CustomerModel