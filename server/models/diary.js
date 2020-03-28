'use strict';
module.exports = (sequelize, DataTypes) => {
  const Diary = sequelize.define('Diary', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.DATE,
    user_id: DataTypes.INTEGER
  }, {});
  Diary.associate = function(models) {
    // associations can be defined here
  };
  return Diary;
};