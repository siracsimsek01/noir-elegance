const mongoose = require('mongoose');
const Reservation = require('../routes/reserve'); // Update with the correct path

const uri = "mongodb+srv://developmentsimsek:noirpass@cluster-1.ouc5riu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function fetchData() {
    try {
      const reservations = await Reservation.find(); // Fetches all documents
      console.log(reservations); // Logs to the console
    } catch (err) {
      console.error(err);
    } finally {
      mongoose.disconnect(); // Close the connection
    }
  }
  
  fetchData();
  