require("dotenv").config();

//Express.js and MongoDB variables
const express = require("express");
const mongoose = require("mongoose");
//Intergrate cors
const cors = require("cors");

const bodyParser = require("body-parser");
const Reservation = require("./models/Reservation");

const app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use(cors());
app.use(bodyParser.json());

// Reservation route
app.post("/api/reserve", async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    const savedReservation = await newReservation.save();
    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
