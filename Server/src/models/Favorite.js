const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER,
         allowNUll: false,
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNUll: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown")
      },
      species: {
         type: DataTypes.STRING,
         allowNUll: false
      },
      gender: {
         type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown")
      },
      origin: {
         type: DataTypes.STRING,
         allowNUll: false
      },
      image: DataTypes.STRING
   }, { timestamps: false });
};
