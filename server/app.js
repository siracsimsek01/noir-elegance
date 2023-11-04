const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//Middlewares for parsing jSON and handling cors

app.use(express.json());
app.use(cors());

mongoose.connect('your-mongodb-connection-string', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


 //setting up route 
 
 const indexRouter = require('./routes/index');
 app.use('/', indexRouter);

 //catch 404 and forward to error handler

 app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // Error handler
  app.use(function(err, req, res, next) {
    // Set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // Render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;