'use strict';

var Question = require('./question');

var questions = [
  {
    "number": 1,
    "question": "After it was burned to the ground during the War of 1812, its contents were replenished with the private collection of Thomas Jefferson. It now contains over 32 million books, and countless other types of periodicals. What library in Washington, D.C., is the largest library on earth?",
    "answer": ["LIBRARY OF CONGRESS", "THE LIBRARY OF CONGRESS"],
    "subject": "SS"
  },
  {
   "number": 2,
   "question": "Consider the number with the following digits: two-one-seven-eight point five-four-six. What number is in the hundredths place?",
   "answer": ["4", "FOUR"],
   "subject": "MA"
  },
  {
   "number": 3,
   "question": "If one bell is half the size of a second bell, its sound will be this interval higher than that of the larger one. What term refers to the distance between any note, and the next highest or lowest occurrence of that same note?",
   "answer": ["OCTAVE", "OCTAVES"],
   "subject": "AH"
  },
  {
   "number": 4,
   "question": "In this book, the Korean orphan Tree-ear lives with Crane-Man under a bridge. Tree-Ear breaks Min's pottery on the way to Songdo, but the emissary hires Min anyway. What is this book written by Linda Sue Park?",
   "answer": ["A SINGLE SHARD", "SINGLE SHARD"],
   "subject": "LA"
  },
  {
    "number": 5,
   "question": "This occurs when a force makes an object move in a direction parallel to that force. What scientific term is measured by force times distance?",
   "answer": ["WORK"],
   "subject": "SC"
  }
];

questions.forEach(function (number, question, answer, subject, index) {
  Question.find({ 'number': number }, function(err, questions) {
  	if (!err && !questions.length) {
      Question.create({number: number, question: question, answer: answer, subject: subject });
  	}
  });
});
