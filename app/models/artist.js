module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artist", {
      aname: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      }
    });
    return Artist;
  };