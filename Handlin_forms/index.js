import express from "express"
import "express-fileupload"
const app = express()
app.set("view engine", "ejs")
app.use(express.json());
//app.use(express.urlencoded({extended:true}));
app.get("/my" ,(req,res) => {
console.log(req.query)
 res.send(req.query)
})
app.get("/post", (req,res) => {
  res.send(req.query)
})
app.get("/getform", (req,res) => {
  res.render("getform")
})

app.get("/postform", (req,res) => {
  res.render("postForm")
})

app.listen(4000, (req,res) => {
  console.log("listening on port 4000")
})