const express=require("express");
const app=express();
const dotenv=require("dotenv");
const { connectDB } = require("./database");
dotenv.config();
app.use(express.json());
connectDB();

app.listen(process.env.PORT,()=>{
  console.log(`Server is listening at port ${process.env.PORT}`);
})