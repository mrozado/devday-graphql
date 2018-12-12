"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      text: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      bar_id: DataTypes.INTEGER
    },
    {}
  );
  Review.associate = function(models) {
    Review.User = Review.belongsTo(models.User, { foreignKey: "user_id" });
    Review.Bar = Review.belongsTo(models.Bar, { foreignKey: "bar_id" });
  };
  return Review;
};
