module.exports = app => {
    const tracks = require("../controllers/track.controller.js");
    var router = require("express").Router();
    
    router.post("/albums/:albumId/tracks", tracks.create);
    
    //update track information
    router.patch("/tracks/:trackId", tracks.update);





    router.delete("/tracks/:trackId", tracks.deleteTrack);
    app.use('/api', router);
  };