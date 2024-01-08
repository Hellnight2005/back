import mongooose, { models } from "mongoose"
const UserSchema = new mongooose.Schema({
    Username:{
        type : String,
        require : true,
        unique : true,
        lowercase: true
    },
    Email: {
        type : String,
        require : true,
        unique : true,
        lowercase: true
    },
    password:{
        type : String,
        require : true,
        unique : true
    }
},{timestamps:true})
export const User = mongooose.model("User", UserSchema)