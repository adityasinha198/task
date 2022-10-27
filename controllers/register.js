const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


 function gettokenaccess(Id){ 
    
  return jwt.sign({userid:Id},'aaaada')
  
  }

exports.postSignUp=async (req,res,next)=>{
    
    const username = req.body.username;
    const name = req.body.name
    const email = req.body.emailid;
   
    const password = req.body.password;
    try {
    
   let user = await User.findAll({where:{email:email}})
   
      if (user.length > 0){
        console.log("User exists")
        return res.status(404).json({success:false, message:'User exists'})

      }
      

      
      
    }
  
    
      catch(err){
        console.log(err)
        return res.status(406).json({success:false, message:'User logged in'})

        
      }
      
   
    const saltround = 8
    bcrypt.hash(password,saltround,(err,hash) => {
      
     
      User
      .create({
          username: username,
          name:name,
          email: email,
        
          password: hash,
          
        })
        .then(result => {
          return res.status(200).json({message :"User Created",result:result})
      
          console.log('Created ChatUser');
      })
        .catch(err => {
          console.log(err);
        });
        

    })
   
  };

  exports.login = (req,res,next) => {
    
    const email = req.body.emailid;
    const password = req.body.password;
    console.log(email,password)

   
    User.findAll({where:{email:email}})
    .then(user=>{
      console.log("In the program")
      bcrypt.compare(password,user[0].password,(err,result) => {
    
      
      if (result == true) {
       
        return res.status(200).json({success:true, message:'User logged in',token:gettokenaccess(user[0].id)
    }) 
       
      }
      else if(!result){
        return res.status(401).json({success:false, message:'User not authorised'}) 
        


      }
    })


      
  })
  
  .catch(err => {
    return res.status(404).json({success:false, message:'User not found'})
    
 })
  } //
     
