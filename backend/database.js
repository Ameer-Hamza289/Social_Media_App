const mongoose=require("mongoose");

const connectDB=()=>{
mongoose.connect(process.env.MONGOOSE_URI)
.then((res)=>{
  console.log("MongoDB connected successfully!");
})
.catch((err)=>{
  console.log("Error:",err);
})
}

module.exports={connectDB};