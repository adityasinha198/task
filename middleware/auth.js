const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.authenticate = (req,res,next) => {
    const token = req.header("Authorisation")
   
    const user = jwt.verify(token,'aaaada')
   
    User.findByPk(user.userid)
    .then(user =>{
        console.log("No")
       
       req.user = user
        next()
    })
    .catch(err => {
        console.log("Not found")
    })
}//