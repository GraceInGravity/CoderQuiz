

$(document).ready(function() {
  $("#formOne").submit(function(event) {
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
    event.preventDefault();


  });



});
