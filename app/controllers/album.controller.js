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
 
//   const list = (req, res) => {
//     Album.findAll({
//       include: [
//         {
//           model: Artist,
//           as: "artist",
//         },
//       ],
//     }).then((albums) => {
//       res.status(200).json(albums);
//     });
//   };
  

