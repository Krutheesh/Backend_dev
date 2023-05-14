import express from "express";
import dotenv from "dotenv";
dotenv.config()
import cors from "cors"
import router from "./routes/book.route.js"
const app = express()

app.use(express.json())
app.use(cors())
app.use('/books',router)
app.get('/',(req,res) =>  {
  res.send("hello my dear krutheesh")
})


export default app
