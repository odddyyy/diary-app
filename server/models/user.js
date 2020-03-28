'use strict';
const { hashing } = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashing(user.password)
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};