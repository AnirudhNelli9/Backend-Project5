module.exports = (sequelize, Sequelize) => {
    const artist = sequelize.define("artist", {
      name: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      }
    });
    return artist;
  };