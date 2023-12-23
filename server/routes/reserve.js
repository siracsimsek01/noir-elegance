const express = require('express');
const cors = require('cors');
const router = express.Router();
const Reservation = require('../models/Reservation');

// CORS options for this route
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


// Enable preflight request for POST request
router.options('/reserve', cors(corsOptions)); // This is the preflight handler

// POST route for reservation
router.post('/reserve', async (req, res) => {
  try {
    const newReservation = new Reservation(req.body);
    await newReservation.save();
    res.status(201).send({ message: 'Reservation saved', data: newReservation });
  } catch (error) {
    res.status(500).send({ message: 'Error saving reservation', error });
  }
});

module.exports = router;
