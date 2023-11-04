const MenuItem = require('../models/MenuItem');

exports.list_all_menu_items = (req, res) => {
  MenuItem.find({}, (err, items) => {
    if (err) res.send(err);
    res.json(items);
  });
};
