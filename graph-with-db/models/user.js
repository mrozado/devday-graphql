"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    User.Reviews = User.hasMany(models.Review, { foreignKey: "user_id" });
  };
  return User;
};
