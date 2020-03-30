'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: DataTypes.BOOLEAN,
    due_date: 
    {
      type : DataTypes.DATEONLY,
      validate :
      {
        isAfter :
        {
          args : new Date().toString(),
          msg : "Forget the Past"
        }
      }
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
  };
  return Todo;
};