'use strict';

var mongoose = require('mongoose');

/*----- Establish Mongoose Schema -----*/

var questionSchema = new mongoose.Schema({
  number: Number,
  question: String,
  answer: [String],
  subject: String
});

var questionModel = mongoose.model('Question', questionSchema);

/*----- Export Question Schema -----*/

module.exports = questionModel;
