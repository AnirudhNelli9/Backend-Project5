module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define("albums", {
    title: {
      type: Sequelize.STRING
    },
  });
  return Album;
};