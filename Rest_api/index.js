import express, { json } from "express";

export const app = express()
app.use(express.json())
import  {route} from "./routes/route.js"
//  app.use(myMiddleTwo,myMiddleOne)

// function myMiddleOne(req,res,next){
// console.log("middlewareOne")
// next()
// }
// function myMiddleTwo(req,res,next){
//   console.log("middlewareTwo")
//   next()
//   }
route(app)
app.listen(4000,(req,res) => {
  console.log("hello")


})