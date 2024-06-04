// require('dotenv').config({path: './env'}) //It is good to go but no code consistency
import dotenv from 'dotenv'
import express from "express";
import connectDB from "./db/index.js";


dotenv.config({
    path:'./env'
})
const app = express()
connectDB()










/*
  effie function
  async () => {
    try {
      await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
      app.on('error',(error) => {
        console.log(`App not able to communicate with db: ${error} `);
        throw error;
      });
      app.listen(process.env.PORT, () => {
        console.log(`App is listening on PORT: ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("Error: ", error);
    }
  }
)();
*/