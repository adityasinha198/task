const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.profile = (req,res,next) => {
    const a = req.user
    const userid = a.id


    User.findByPk(userid)
   .then(userinfo =>{
        
        res.json({userinfo:userinfo})
    })


    .catch(err => console.log(err))
    

}
//




    
   