const db = require("../models");
const Artist = db.artists;
const Album = db.albums;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const { artistId } = req.params;
  
    Artist.findByPk(artistId).then((artist) => {
      if (!artist) {
        res.status(404).json({ error: "The artist could not be found." });
      } else {
        Album.create({
          title: req.body.title,
          artistId: artistId

        }).then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the Artist."
            });
        });
      }
    });
  };
 
  exports.deleteAlbum = (req, res) => {
    const id = req.params.id;
    Album.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Album was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Album with id=${id}. Maybe Album was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Album with id=" + id
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
