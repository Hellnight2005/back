// users.model.js

import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
    {
        Usename: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        Email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        Fullname: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        Avatar: {
            type: String,
            required: true,
        },
        CoverImage: {
            type: String,
        },
        WatchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video",
            }
        ],
        Password: {
            type: String,
            required: [true, 'Password is Required']
        },
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

UserSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) return next();
    this.Password = await bcrypt.hash(this.Password, 6);
    next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.Password);
};

UserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.Email,
            Usename: this.Usename,
            Fullname: this.Fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
};

UserSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_SECRET
        }
    );
};

export const User = mongoose.model("User", UserSchema);
