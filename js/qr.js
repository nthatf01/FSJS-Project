var questionSet;
var totalQuestions = -1;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    questionSet = JSON.parse(xhr.responseText);
  }
}

//Removes all Subject Area classes from the .questionContainer
function removeSubjectClass(){
  $(".questionContainer").removeClass("AH LA MA SC SS");
}

//Adds a Subject Area class to the .questionContainer
function addSubjectClass(subjectClass){
  $(".questionContainer").addClass(subjectClass);
}

function randomQuestion(){
  //Clear the text currently in the answerBox
  $("#answerBox").val('');

  var randomQuestionNumber = Math.floor(Math.random() * questionSet.length);
  var qSubject = questionSet[randomQuestionNumber].subject;
  totalQuestions++;
  $(".question").text(questionSet[randomQuestionNumber].question);

  //Remove current Subject class
  removeSubjectClass();

  //Add the new Subject class
  addSubjectClass(qSubject);
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
