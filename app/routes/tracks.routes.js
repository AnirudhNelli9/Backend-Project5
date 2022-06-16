module.exports = app => {
    const tracks = require("../controllers/track.controller.js");
    var router = require("express").Router();
    
    router.post("/tracks", tracks.create);
    router.get("/tracks", tracks.findAll);
