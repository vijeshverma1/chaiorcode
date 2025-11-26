import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
   path:"/.env"
});


connectDB()








/*
import express from "express";
const app=express();


;(async()=>{
 
     try {
         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
         app.on("error",(error)=>{
            console.log("ERROR IN CONNECTING TO SERVER",error);
            throw error
         })
         app.listen(process.env.PORT,()=>{
            console.log(`SERVER IS RUNNING AT PORT ${process.env.PORT}`);
         })
     } catch (error) {
        console.error("ERROR:",error)
        throw error
     }

})()
*/