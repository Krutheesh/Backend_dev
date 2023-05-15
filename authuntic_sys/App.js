
import * as dotenv from "dotenv";
dotenv.config()
import express from 'express';
import User from "./model/user.js"
import db from "./config/database.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
const app = express();

app.use(express.json())

db()


app.get('/' ,(req,res) => {
  res.send("hello world");
})



app.post("/register", async(req,res) => {
  try{

    const{firstName,lastName,email,password} = req.body;
  if (!(email && password && lastName && firstName)){
    res.status(400).send("All fields are required mandatory*")
  }
  const existingUser = await User.findOne({email})

  if(existingUser){
    res.status(401).send("User already exists")
  }
  const myEncPassword  = await bcrypt.hash(password,10)
  const user = await User.create({
    firstName,
    lastName,
    email:email.toLowerCase(),
    password: myEncPassword
  })

  const token =  jwt.sign({
    user_id:user._id,email
  },process.env.SECURITY_KEY,
  {
    expiresIn:"2h"
  })
 user.token = token;  

 //password handling
 user.password=undefined

 res.status(201).json(user)

  }
  catch(err){
    console.log(err)
  }

})

app.post("/login",async(req,res) => {
  try{
    const {email,password} = req.body
    if(!(email && password)){
      res.status(400).send("field is missing")
    }
    const user = await User.findOne({email})
    if((user && bcrypt.compare(password,user.password))){
     const token = jwt.sign(
      {
        user_id:user._id,
        email
      }
      ,
      process.env.SECURITY_KEY
      ,
      {
        expiresIn:"2h"
      }

     )
     user.token = token
     user.password = undefined
     res.status(200).json(user)
      
    }
    res.send(400).send("email or password is incorrect")
  }
  catch(err){
    console.log(err)

  }
})
export default app;