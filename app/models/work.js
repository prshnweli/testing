// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a model that matches up with DB
var Work = sequelize.define("work", {
  weight: {
    type: Sequelize.INTEGER
  },
  rep: {
    type: Sequelize.INTEGER
  },
  sets: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
});

// Syncs with DB
Work.sync();

module.exports = Work;
