const {DataTypes} = require('sequelize');
module.exports= (sequelize) =>{
sequelize.define('activity',{
    id:{
        type:DataTypes.UUID,
        primaryKey:true,
        allowNull:false,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    difficulty:
    {
        type:DataTypes.ENUM('1','2','3','4','5'),
        defaultValue:'1',
        defaultValue:null
    },
    duration:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    season:{
        type:DataTypes.ENUM('Summer','Autum','Winter','Spring'),
        defaultValue:null
        
    }
})
}