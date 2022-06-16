module.exports = app => {
    const albums = require("../controllers/album.controller.js");
    var router = require("express").Router();
    
    router.post("/albums", albums.create);
    router.get("/albums", albums.findAll);
    router.get("/albums/:id", albums.findOne)
    router.get("/artists/:artistId/albums", albums.getAlbumsByArtistId);
    router.put("/albums/:id", albums.update);
    router.delete("/albums/:id", albums.deleteAlbum);
    router.delete("/albums", albums.deleteAll);
    app.use('/api', router);
  };