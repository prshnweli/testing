// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Work = require("../models/work.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all 
  app.get("/api/all", function(req, res) {

    Work.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a workout
  app.post("/api/new", function(req, res) {

    console.log("Work Data:");
    console.log(req.body);

    Work.create({
      workoutName: req.body.workoutName,
      muscle: req.body.muscle,
      weight: req.body.weight,
      reps: req.body.reps,
      sets: req.body.sets,
    }).then(function(results) {
      res.end();
    });

  });

};