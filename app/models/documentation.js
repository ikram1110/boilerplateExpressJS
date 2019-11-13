'use strict';
module.exports = (sequelize, DataTypes) => {
  const documentation = sequelize.define('documentation', {
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  documentation.associate = function(models) {
    // associations can be defined here
  };
  return documentation;
};