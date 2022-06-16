const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: '*',
  };
  
app.use(cors(corsOptions));
app.options('*', cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

//reg practice
db.sequelize.sync();

//While developing
//db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
   //});
const artists = require("./app/routes/artists.routes")
artists(app);
const albums = require("./app/routes/albums.routes")
albums(app);
const tracks = require("./app/routes/tracks.routes")
tracks(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});