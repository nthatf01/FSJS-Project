var questionSet;
var currentQuestion;
var qAnswer;
var totalQuestions = 0;
var correctlyAnswered = 0;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    questionSet = JSON.parse(xhr.responseText);
  }
}

//Handles Question and Answer functionality
function questionHandler(){
  //Increase Questions Asked counter
  totalQuestions++;

  //Capture User's Answer
  var userAnswer = $("#answerBox").val();

  //Check Answer
  if (checkAnswer(userAnswer)) {
    console.log("Correct!");
    correctlyAnswered++;
  }

  //Update Score
  updateScore();

  //Clear #answerBox
  answerBoxClear();

  //Generate new Random Question
  randomQuestion();
}

//Removes all Subject Area classes from the .questionContainer
function removeSubjectClass(){
  $(".questionContainer").removeClass("AH LA MA SC SS");
}

//Adds a Subject Area class to the .questionContainer
function addSubjectClass(subjectClass){
  $(".questionContainer").addClass(subjectClass);
}

//Clear the  text in the #answerBox
function answerBoxClear(){
  $("#answerBox").val('');
}

//Update the .score text
function updateScore(){
  $(".score").text(correctlyAnswered + " / " + totalQuestions);
}

function randomQuestion(){
  var randomQuestionNumber = Math.floor(Math.random() * questionSet.length);
  qAnswer = questionSet[randomQuestionNumber].answer;
  var qSubject = questionSet[randomQuestionNumber].subject;
  $(".question").text(questionSet[randomQuestionNumber].question);

  //Remove current Subject class
  removeSubjectClass();

  //Add the new Subject class
  addSubjectClass(qSubject);
}

function checkAnswer(userAnswer){
  var correctAnswer = false;
  for(i = 0; i < qAnswer.length; i++) {
    if(userAnswer.toUpperCase() === qAnswer[i]) {
      correctAnswer = true;
    }
  }
  return correctAnswer;
}

xhr.open("GET", "../data/questions.json");
xhr.send();

$('#startButton').click(function(){
  $(this).hide();
  $("#answerBox").css("visibility", "visible");
  $("#answerButton").css("visibility", "visible");
  $(".scoreContainer").css("visibility", "visible");
  randomQuestion();
});

$('#answerButton').click(function(){
  questionHandler();
});

$('#answerBox').bind('keyup', function(e) {
    if ( e.keyCode === 13 ) { // 13 is enter key
      questionHandler();
    }
});
