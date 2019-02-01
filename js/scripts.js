function result(q1Input, q2Input, q3Input, q4Input, q5Input){
  var scoreTotal = 0;

  if (q1Input<=0) {
    return ("We are dissapointed to tell you that you should not be a programmer at all!")
  } else {
    scoreTotal = scoreTotal + q1Input;
  }

  if (q5Input>=0) {
      return ("You really should study Ruby");
  }

  if (q2Input>=4) {
    return ("You would have fun in CSS and Design classes. These might be a great place for you to express your artistic side.")
  }

  if (q4Input==3) {
    return ("C# would be a great option for you. You could work where there are lots of resources and oportunities")
  }

  if (q3Input>=3) {
    return("Try out Java. You would have fun making great apps and phone functions!")
  }

  return("How about trying out PHP? Lots of fast paced and diverse projects could be a great future for you, Coder!")
}





$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $("#story1").show();
    var name = $("#name").val();
    event.preventDefault();

    var decisionTrack = 0;
    var nameInput = $("input#name").val();
    var q1Input = $("select#q1").val();
    var q2Input = $("select#q2").val();
    var q3Input = $("select#q3").val();
    var q4Input = $("select#q4").val();
    var q5Input = $("select#q5").val();

    $(".name").text(nameInput);
    $(".q1").text(q1Input);
    $(".q2").text(q1Input);
    $(".q3").text(q1Input);
    $(".q4").text(q1Input);
    $(".q5").text(q1Input);

    $("#story").show();
    // Confused about where this should be.

    var printResult =  result(q1Input, q2Input, q3Input, q4Input, q5Input);
    var output = $("#output");
    $(".name").text(name);
    $(".endResult").text(printResult);

    console.log(printResult);
  });

});
