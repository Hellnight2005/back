import dotenv from "dotenv"
// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

// here we give dotenv path 
dotenv.config({
    path: 'C:\Users\Abhijeet\Desktop\Abhijeet\Back\back\Database-Connection\.env'
})
// here we call databases from index file 
connectDB()
.then(() => {
    app.listen(process.env.PORT || 9000, () => {
        console.log(`Serve is run at : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed...!!!!", err);
})


/*
import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on  port ${process.env.PORT}`);
        })
    
    } catch (error) {
        console.error("ERROR",error);
        throw err
    }
})()
*/