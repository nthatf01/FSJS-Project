$('#startButton').click(function(){
  $(".question").text("What is the product of 9 x 3?");
  $(this).hide();
  $("#answerBox").css("visibility", "visible");
});
