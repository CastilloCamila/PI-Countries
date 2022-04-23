const {DataTypes} = require('sequelize');
module.exports= (sequelize) =>{
sequelize.define('activity',{
    id:{
        type:DataTypes.UUID,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    dificulty:
    {
        type:DataTypes.ENUM('1','2','3','4','5'),
 
    },
    duracion:{
        type:DataTypes.INTEGER
    },
    season:{
        type:DataTypes.ENUM('summer','autum','winter','spring')
    }
})
}