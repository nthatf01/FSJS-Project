/*----- AJAX for when site is live -----*/

/*var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
    var questionSet = JSON.parse(xhr.responseText);
  }
}

xhr.open("GET", "data/questions.json");
xhr.send();*/

/*----- Local AJAX/JSON workaround -----*/

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data/questions.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function init() {
  loadJSON(function(response) {
   // Parse JSON string into object
     var actual_JSON = JSON.parse(response);
  });
 }

$('#startButton').click(function(){
  $(".question").text("What is the product of 9 x 3?");
  $(this).hide();
  $("#answerBox").css("visibility", "visible");
  init();
});
