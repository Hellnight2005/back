// Fisrt install [npm i mongooose]
// Ther will some file downlod automaticaly such as:
// Node_Modules
// package-Lock.json
// package.json

// The basic three line of models
// import mongooose, { models } from "mongoose"
// const UserSchema = new mongooose.Schema({})
// export const user = mongooose.model("User", UserSchema) 

import mongooose, { models } from "mongoose"
const UserSchema = new mongooose.Schema(
    {
        // you can use simple but if you use object the you defined more attribute in class  
        Username: {
            type: String,
            require: true,
            unique: true,
            Lowercase: true
        },
        email:{
            type: String,
            require:true,
            unique:true,
            Lowercase:true
        },
        Password:{
            type: String,
            // you can add if else condition through array 
            require: [true, "Password is in letter"]
        }
    },{
        // Here timestamps is use for to recored time of User 
        timestamps: true}
)
export const User = mongooose.model("User", UserSchema)