const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: "Welcome to Noir Elegance's API" });
});


// Menu items routes

router.get('/menu', menuController.list_all_menu_items)

module.exports = router;
