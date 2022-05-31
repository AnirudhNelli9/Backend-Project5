module.exports = app => {
  const lessons = require("../controllers/artist.controller.js");
  var router = require("express").Router();
  router.post("/artists/:artistId/albums", albums.create);
  // Retrieve all Lessons for a Tutorial
  router.get("/:tutorialId/lessons/", lessons.findAll);
  // Retrieve all published Lessons for a Tutorial
  router.get("/:tutorialId/lessons/published", lessons.findAllPublished);
  // Retrieve a single Lesson with id
  router.get("/:tutorialId/lessons/:id", lessons.findOne);
  // Update a album with id
  router.patch("/albums/:albumId", albums.update);
  // Delete album with album id
  router.delete("/albums/:albumId", albums.deleteAlbum);
  // Delete all Lessons
  router.delete("/albums/all", albums.deleteAll);
  app.use('/api/tutorials', router);
};