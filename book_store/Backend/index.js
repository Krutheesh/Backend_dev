
import mongoose from "mongoose";
import app from "./app.js";

(async() => {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected")
    app.on("error", (err) => {
      console.error("ERROR: ", err)
      throw err
    })
    app.listen(process.env.PORT,() => {
      console.log(`listening on port ${process.env.PORT}`)
    })
  }
  catch(err){
    console.log(err)
    throw err
  }

})()



