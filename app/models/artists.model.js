module.exports = (sequelize, Sequelize) => {
    const Artist = sequelize.define("artists", {
      title: {
        type: Sequelize.STRING
      }
    });
    return Artist;
  };