"use strict";
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define(
    "Bar",
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING
    },
    {}
  );
  Bar.associate = function(models) {
    Bar.Reviews = Bar.hasMany(models.Review, { foreignKey: "bar_id" });
  };
  return Bar;
};
