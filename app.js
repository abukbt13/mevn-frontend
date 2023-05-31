 const express= require('express')

 const mongoose = require('mongoose')
 require('dotenv').config()

 const bodyParser =require('body-parser')

 const app = express()
 app.use(function(req, res, next) {
     res.header("Access-Control-Allow-Origin", "*")
     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS,HEAD, DELETE")
     res.header("Access-Control-Allow-Headers", "auth-token,origin,x-requested-with,Content-Type,Accept")
     next()
 })

 //connect to db clouddb
const uri = process.env.MONGODB_URI;
 mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 })

 .then(()=>{
     console.log('MongoDb connected successfully')
 })
 .catch((err)=>console.log(err));

 app.use(bodyParser.json());

 const todoroute = require('./routes/todos')

app.use('/todos', todoroute)

app.listen(3001)