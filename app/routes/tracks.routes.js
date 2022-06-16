module.exports = app => {
    const tracks = require("../controllers/track.controller.js");
    var router = require("express").Router();
    
    router.post("/tracks", tracks.create);
    router.get("/tracks", tracks.findAll);
    router.get("/tracks/:id", tracks.findOne)
    router.get("/tracks", tracks.getTracksByAlbumId);
    router.put("/tracks/:id", tracks.update);
    router.delete("/tracks/:id", tracks.deleteTrack);
    router.delete("/tracks", tracks.deleteAll);
    
    app.use('/api', router);
  };