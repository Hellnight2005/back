import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrpt from "bcryptjs" // here is this
const Userschema = new Schema(
    {
        Usename: {
            type: String,
            require: true,
            unique: true,
            lowecase:true,
            trim: true,
            index: true
        },
        Email: {
            type: String,
            require: true,
            unique: true,
            lowecase:true,
            trim: true,
        },
        Fullname: {
            type: true,
            require:true,
            trim: true,
            index:true
        },
        Avatar: {
            type: String, 
            require: true
        },
        CoverImage: {
            type: String,
        },
        WatcHistory: [
            {
                type : Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        Password: {
            type: String,
            require: [true, 'Password is Required']
        },
        refreshToken:{
            type: String,
        }
    },
    {
        timestamps: true
    }
)



Userschema.pre("save", async function (next) 
    {
        // here it check if this.Password is Modified or not 
        if (!this.isModified("password")) return next();
        // her we give the condition if it is Modified 
        this.Password = bcrpt.hash(this.Password, 6);
        next();
    }
);
//  we can designe custom method 
Userschema.methods.isPasswordCorrect = async function (password){
    return await bcrpt.compare(password, this.password)
}

Userschema.methods.generateAccessToken= function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            Usename:this.Usename,
            Fullname: this.Fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
Userschema.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_SECRET
        }
    )
}


export const User = mongoose.model("User", Userschema);