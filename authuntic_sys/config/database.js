import mongoose from "mongoose";
  export default ( async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("db connected sucessfully")
    mongoose.connection.on('error', err => {
      logError(err);
    });
    }
    catch(err){
      console.log(err)
    }
}) 
