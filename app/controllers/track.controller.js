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
 