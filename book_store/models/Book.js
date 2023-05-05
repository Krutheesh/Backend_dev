import mongoose, { model } from "mongoose";

const bookSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "mandatory field"]
  },
  author:{
    type:String,
    required:[true,"mandatory field"]
  },
  description: {
    type: String,
  },
  price : {
    type: String,
    required:[true, 'mandatory price']
  },
  available : {
    type :Boolean, 
    required:true
  }

})

export default mongoose.model("Book",bookSchema)