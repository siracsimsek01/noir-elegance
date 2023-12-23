const mongoose = require('mongoose');

// Define the Reservation schema
const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  persons: String,
  time: String,
  date: String
});

// Create a model from the schema
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
