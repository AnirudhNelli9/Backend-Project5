module.exports = app => {
  const tutorials = require("../controllers/album.controller.js");
  var router = require("express").Router();
  // Create a new Artist
  router.post("/", artists.create);
  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/:id", tutorials.update);
  // Delete a Artist with id
  router.delete("/:id", artists.delete);
  // Delete all Artists
  router.delete("/all", artists.deleteAll);
  app.use('/api/tutorials', router);
};