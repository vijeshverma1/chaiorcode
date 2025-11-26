import mongoose from "mongoose";
import { DB_NAME } from "../consatants.js";

 const connectDB = async () => {

       try {
           const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
              console.log( " \n DATABASE CONNECTED SUCCESSFULLY !! DB HOST:",`${connectionInstance.connection.host}` );
       } catch (error) {
          console.log("ERROR IN CONNECTING TO DATABASE",error);
          process.exit(1);

       }

 }
    export default connectDB;