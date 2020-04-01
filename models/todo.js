'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    status: 
    {
      type : DataTypes.BOOLEAN,
      defaultValue : false,
    },
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
    Todo.belongsTo(models.User);
  };
  return Todo;
};