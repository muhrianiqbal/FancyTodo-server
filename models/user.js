'use strict';
const {encrypt} = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => 
{
  const User = sequelize.define('User', 
  {
    email: 
    {
      allowNull : false,
      type : DataTypes.STRING,
      unique : true,
      validate:
      {
        isEmail : {msg : "Use email format"}
      }
    },
    password: 
    {
      type : DataTypes.STRING,
      allowNull : false,
    },
  }, 
  {
    hooks:
    {
      beforeCreate : (user, options) =>
      {
        user.password = encrypt(user.password);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo);
  };
  return User;
};