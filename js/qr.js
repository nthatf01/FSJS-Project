var questionSet;
var totalQuestions = -1;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    questionSet = JSON.parse(xhr.responseText);
  }
}

function randomQuestion(){
  var randomQuestionNumber = Math.floor(Math.random() * questionSet.length);
  var qSubject = questionSet[randomQuestionNumber].subject;
  totalQuestions++;
  $(".question").text(questionSet[randomQuestionNumber].question);

  //Remove current Subject class
  $(".questionContainer").removeClass("AH LA MA SC SS");

  //Add the new Subject class
  $(".questionContainer").addClass(qSubject);
}

function checkAnswer(){

}

xhr.open("GET", "../data/questions.json");
xhr.send();

$('#startButton').click(function(){
  $(this).hide();
  $("#answerBox").css("visibility", "visible");
  $("#answerButton").css("visibility", "visible");
  randomQuestion();
});

$('#answerButton').click(function(){
  randomQuestion();
});

$('#answerBox').bind('keyup', function(e) {
    if ( e.keyCode === 13 ) { // 13 is enter key
      randomQuestion();
    }
});
