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

  // Retrieve all Albums from the database.
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    Album.findAll({ where: condition },
        )
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Albums."
        });
      });
  };
  //const 
  exports.getAlbumsByArtistId = (req, res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      res.status(404).json({ error: "The artist could not be found." });
    } else {
      Album.findAll({
        where: { artistId: artistId },
        include: [
          {
            model: Artist,
            as: "artist",
          },
        ],
      })
        .then((albums) => {
          res.status(200).json(albums);
        })
        .catch(console.error);
    }
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
  // Update a Track by the id in the request
  exports.update = (req, res) => {
    const id = req.params.id;
    Track.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Track was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Track with id=${id}. Maybe Track was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Track with id=" + id
        });
      });
  };