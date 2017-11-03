// var array = []

// $(document).ready(function() {

// $("#submit-btn").on("click", function(e) {

//   event.preventDefault();

//   let muscle = $("#muscle").val().trim()
//   let workout = $("#workout").val().trim()
//   let weight = $("#weight").val().trim()
//   let reps = $("#reps").val().trim()
//   let sets = $("#sets").val().trim()


//   pushToDB(muscle, workout, weight, reps, sets);

//   // Clears all of the text-boxes
//   $("#muscle").val("");
//   $("#workout").val("");
//   $("#weight").val("");
//   $("#reps").val("");
//   $("#sets").val("");

//   console.log("click")

// });

// function pushToDB(muscle, workout, weight, reps, sets) {

//   array.push({
//     "muscle": muscle,
//     "workout": workout,
//     "weight": weight, 
//     "reps": reps, 
//     "sets": sets, 
//   });

//   console.log(array)
// }
// })


function choose() {
    if (document.getElementById('muscle').value == 'chest') {
        document.getElementById('chest').style.display = 'block';
    } else {
        document.getElementById('chest').style.display = 'none';
    }
    if (document.getElementById('muscle').value == 'back') {
        document.getElementById('back').style.display = 'block';
    } else {
        document.getElementById('back').style.display = 'none';
    }
    if (document.getElementById('muscle').value == 'shoulders') {
        document.getElementById('shoulders').style.display = 'block';
    } else {
        document.getElementById('shoulders').style.display = 'none';
    }
    if (document.getElementById('muscle').value == 'abs') {
        document.getElementById('abs').style.display = 'block';
    } else {
        document.getElementById('abs').style.display = 'none';
    }
    if (document.getElementById('muscle').value == 'arms') {
        document.getElementById('arms').style.display = 'block';
    } else {
        document.getElementById('arms').style.display = 'none';
    }
    if (document.getElementById('muscle').value == 'legs') {
        document.getElementById('legs').style.display = 'block';
    } else {
        document.getElementById('legs').style.display = 'none';
    }
}


