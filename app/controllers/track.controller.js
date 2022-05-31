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