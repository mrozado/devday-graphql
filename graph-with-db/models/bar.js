'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bar = sequelize.define('Bar', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Bar.associate = function(models) {
    // associations can be defined here
  };
  return Bar;
};