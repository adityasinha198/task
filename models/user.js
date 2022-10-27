const Sequelize=require('sequelize');

const sequelize=require('../util/database.js')

const user = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username: Sequelize.STRING,
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        unique:true,
        
    },
    
    password:Sequelize.STRING,
    
});

module.exports=user;
//