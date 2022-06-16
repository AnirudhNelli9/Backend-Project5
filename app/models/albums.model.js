module.exports = (sequelize, Sequelize) => {
    const Album = sequelize.define("albums", {
      title: {
        type: Sequelize.STRING
      },
    //   artistId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //        model: 'artists', // 'artists' refers to table name
    //        key: 'id', // 'id' refers to column name in artists table
    //     }
    //  }
    });
    return Album;
  };