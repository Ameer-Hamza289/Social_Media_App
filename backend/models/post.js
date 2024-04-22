const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
caption:String,
image:{
  public_id:String,
  url:String
},
owner:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"User",
},
createdAt:{
  type:Date,
  default:Date.now
},
likes:[{
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
}]




});

const post=mongoose.model("Post",PostSchema);