const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to Noir Elegance's API" });
});

router.get('/test-cors', (req, res) => {
  res.json({ message: 'CORS is working!' });
});



module.exports = router;
