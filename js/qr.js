/*----- AJAX for when site is live -----*/
var questionSet;

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    questionSet = JSON.parse(xhr.responseText);
  }
}

xhr.open("GET", "data/questions.json");
xhr.send();

$('#startButton').click(function(){
  $(".question").text("What is the product of 9 x 3?");
  $(this).hide();
  $("#answerBox").css("visibility", "visible");
});
