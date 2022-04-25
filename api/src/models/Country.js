const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type:DataTypes.CHAR(3),
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    continent:{
      type:DataTypes.STRING,
      allowNull:false
    },
    capital:{
      type:DataTypes.STRING,
      allowNull:false,
      default:'No titen Capital'
    },
    subregion:{
      type:DataTypes.STRING,
    },
    area:{
      type: DataTypes.FLOAT
    },
    population:{
      type:DataTypes.INTEGER
    }
  });
};
