module.exports = (sequelize, Sequelize) => {
    const track = sequelize.define("track", {
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      }
    });
    return track;
  };