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
  // Update a Lesson with id
  router.put("/:tutorialId/lessons/:id", lessons.update);
  // Delete album with album id
  router.delete("/albums/:albumId", albums.deleteAlbum);
  // Delete all Lessons
  router.delete("/:tutorialId/lessons/:id", lessons.deleteAll);
  app.use('/api/tutorials', router);
};