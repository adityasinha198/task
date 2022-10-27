const path = require('path');

const express = require('express');

const app = express();
const cors=require('cors')



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cors())

const sequelize = require('./util/database')

const register=require('./routes/register')
const profile =require('./routes/profile')

app.use(register)
app.use(profile)








sequelize
.sync()
.then(result=>{
    app.listen(8000)
    
   

})
.catch(err => console.log(err))
