'use strict';

var express = require('express');
var parser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Question = require('./question');
require('./seed.js');

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates');

app.use(express.static( __dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000, function(){
  console.log("The frontend server is running on port 3000!");
});

/*----- Connect to MongoDB -----*/

mongoose.connect('mongodb://localhost/qr-Questions', function(err){
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
