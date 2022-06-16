module.exports = (sequelize, Sequelize) => {
    const Track = sequelize.define("tracks", {
      title: {
        type: Sequelize.STRING
      },
      year:{
        type: Sequelize.INTEGER
      }
    //   ,
    //   albumId: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //        model: 'albums', // 'artists' albums to table name
    //        key: 'id', // 'id' refers to column name in artists table
    //     }
    //  }
    });
    return Track;
  };