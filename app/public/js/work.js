/* global moment */

// When user clicks add-btn
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  var newWorkout = {
    weight: $("#weight").val().trim(),
    reps: $("#reps").val().trim(),
    sets: $("#sets").val().trim(),
  };

  console.log(newWorkout);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newWorkout)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");

      row.append("<p> weight: " + newWorkout.weight + "</p>");
      row.append("<p> reps: " + newWorkout.reps + "</p>");
      row.append("<p> sets: " + newWorkout.sets + "</p>");

      $("#work-area").prepend(row); //change location

    });

  // Empty each input box by replacing the value with an empty string
  $("#weight").val("");
  $("#reps").val("");
  $("#sets").val("");
});

$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");

      row.append("<p> weight:" + data[i].weight + "</p>");
      row.append("<p> reps:" + data[i].reps + "</p>");
      row.append("<p> sets:" + data[i].sets + "</p>");

      $("#work-area").prepend(row); 

    }

  }

});
