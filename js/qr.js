var questionSet;
var currentQuestion;
var qAnswer;
var qSubject;
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
  var userAnswerCheck = checkAnswer(userAnswer);
  if (userAnswerCheck) {
    console.log("Correct!");
    correctlyAnswered++;
  }

  //Update Score
  updateScore();

  //Add answered question to Answered Container
  addAnsweredQuestion(userAnswer, totalQuestions, userAnswerCheck);

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

//Add a question to the top of the Answered Questions list
function addAnsweredQuestion(userAnswer, questionNumber, questionGrade){
  var answeredIcon;
  if (questionGrade) {
    answeredIcon = "<i class='fa fa-check-circle fa-3x' aria-hidden='true'></i>";
  } else {
    answeredIcon = "<i class='fa fa-times-circle fa-3x' aria-hidden='true'></i>";
  }
  var answeredHTML = "<ul class='answeredWrapper'><li class='answeredText " + qSubject + "'>" + questionNumber + ". " + currentQuestion + "</li><li class='answeredCorrect'>" + answeredIcon + "</li></ul>";
  $(".questionList").prepend(answeredHTML);
};

//Clear the  text in the #answerBox
function answerBoxClear(){
  $("#answerBox").val('');
}

//Update the .score text
function updateScore(){
  $(".score").text(correctlyAnswered + " / " + totalQuestions + " : " + Math.round(((correctlyAnswered/totalQuestions) * 100)) + "%");
}

function randomQuestion(){
  var randomQuestionNumber = Math.floor(Math.random() * questionSet.length);
  qAnswer = questionSet[randomQuestionNumber].answer;
  qSubject = questionSet[randomQuestionNumber].subject;
  currentQuestion = questionSet[randomQuestionNumber].question;
  $(".question").text(currentQuestion);

  //Remove current Subject class
  removeSubjectClass();

  //Add the new Subject class
  addSubjectClass(qSubject);
}

//Check to see if the user's answer is correct
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
  $("#answerBox").css("visibility", "visible").focus();
  $("#answerButton").css("visibility", "visible");
  $(".scoreContainer").css("visibility", "visible");
  $(".answeredContainer").css("visibility", "visible");
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
