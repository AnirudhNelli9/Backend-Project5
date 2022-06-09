const db = require("../models");
const Artist = db.artists;
const Album = db.albums;
const Track = db.tracks;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
    const { albumId } = req.params;
  
    Album.findByPk(albumId).then((album) => {
      if (!album) {
        res.status(404).json({ error: "The album could not be found." });
      } else {
        Track.create({
          title: req.body.title,
          year:req.body.year,
          albumId: albumId
        }).then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Album."
            });
        });
      }
    });
  };
 // Retrieve all Tracks from the database.
 exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  Track.findAll({ where: condition },
      )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Tracks."
      });
    });
};
//const 
exports.getTracksByAlbumId = (req, res) => {
const { albumId } = req.params;

Album.findByPk(albumId).then((album) => {
  if (!album) {
    res.status(404).json({ error: "The album could not be found." });
  } else {
    Track.findAll({
      where: { albumId: albumId },
      include: [
        {
          model: Album,
          as: "album",
        },
      ],
    })
      .then((tracks) => {
        res.status(200).json(tracks);
      })
      .catch(console.error);
  }
});
};
exports.getTracksByArtistId = (req, res) => {
const { artistId } = req.params;

Artist.findByPk(artistId).then((artist) => {
  if (!artist) {
    res.status(404).json({ error: "The artist could not be found." });
  } else {
    Track.findAll({
      where: { artistId: artistId },
      include: [
        {
          model: Artist,
          as: "artist",
        },
      ],
    })
      .then((tracks) => {
        res.status(200).json(tracks);
      })
      .catch(console.error);
  }
});
};


  // Delete a Track with the specified id in the request
  exports.deleteTrack = (req, res) => {
    const id = req.params.id;
    Track.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Track was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Track with id=${id}. Maybe Track was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Track with id=" + id
        });
      });
  };
   // Delete all Tracks from the database.
   exports.deleteAll = (req, res) => {
    Track.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tracks were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Tracks."
        });
      });
  };

  // Find a single Album with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    Album.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Album with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Album with id=" + id
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