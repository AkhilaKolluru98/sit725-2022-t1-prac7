require('dotenv').config()
const mongoose = require("mongoose");
//Database Connection
const client = mongoose.connect("mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cluster0.dku11.mongodb.net/myFirstDatabase",
{
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connection established successfully");
}).catch((e)=>
{
    console.log(e,"Database connection failed");
});

exports.mongoClient=client;


