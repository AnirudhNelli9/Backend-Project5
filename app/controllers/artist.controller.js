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

  exports.findOne = (req, res) => {
    const id = req.params.id;
    Artist.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Artist with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Artist with id=" + id
        });
      });
  };

  // Update a Artist by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
    Artist.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Artist was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Artist with id=${id}. Maybe Artist was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Artist with id=" + id
        });
      });
  };
  // Delete a Artist with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
    Artist.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Artist was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Artist with id=${id}. Maybe Artist was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Artist with id=" + id
        });
      });
  };
  // Delete all Artists from the database.
  exports.deleteAll = (req, res) => {
    Artist.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Artists were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all artists."
        });
      });
  };