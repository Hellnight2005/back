import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// it take json file 
app.use(express.json({limit: "15kb"}))

// it take url encode 
app.use(express.urlencoded({extended: true, limit: "15kb"}))

// to hold the file for public avaible 
app.use(express.static("Token"))

// for cured operation 
app.use(cookieParser())

// routes import 
import UserRouter from "Router-Controller/src/routes/user.routes.js"


// router declaration 
app.use("/api/v1/users", UserRouter)


export{ app }
