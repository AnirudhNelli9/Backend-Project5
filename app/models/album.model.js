module.exports = (sequelize, Sequelize) => {
    const album = sequelize.define("album", {
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      }
    });
    return album;
  };