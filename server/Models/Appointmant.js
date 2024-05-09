const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    email: String,
    address: String,
    problem: Array,
    phoneNumber: Number,
    price: Number,
    date: Date,
    completed:Boolean
});

const AppointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = AppointmentModel;
