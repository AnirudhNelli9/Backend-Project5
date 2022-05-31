module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("tracks", {
      title: {
        type: Sequelize.STRING
      },
      year:{
        type: Sequelize.INTEGER
      }
    });
    return Track;
  };