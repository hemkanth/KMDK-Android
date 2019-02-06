// import modules
var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

// import necessary js files
var ErrorManagement = require('./server/handling/ErrorHandling.js');
var LogManagement = require('./server/handling/LogHandling.js');

// set port & assign var to express function
var port = process.env.PORT || 3000;
var app = express();

// DB Connection
const db = 'mongodb://hemkanth:hemkanth_s123@ds125381.mlab.com:25381/kdmk';
mongoose.connect(db, error => {
   if (error) {
      console.log('DB Connection Error', error); // Error in DB Connection
   } else {
      console.log('DB Connected Successfully'); // SB Connected Successfully
   }
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// *********************** import routes file ***************************
require('./server/web/routes/Settings.routes.js')(app); // Settings Routes

app.get('*', function(req, res){
   res.send('This is Server Side Page');
});

app.listen(port, function(){
 console.log('Listening on port ' + port);
});