module.exports = app => {
    const tracks = require("../controllers/track.controller.js");
    var router = require("express").Router();
    
    router.post("/albums/:albumId/tracks", tracks.create);
    
    





    router.delete("/tracks/:trackId", tracks.deleteTrack);
    app.use('/api', router);
  };