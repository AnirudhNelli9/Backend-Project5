const db = require("../models");
const Artist = db.artists;
const Op = db.Sequelize.Op;

// Create and Save a new Artist
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Artist
    const artists = {
      title: req.body.title
    };
    // Save Artist in the database
    Artist.create(artists)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Artist."
        });
      });
  };