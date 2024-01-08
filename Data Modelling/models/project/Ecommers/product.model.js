import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    description:{
        require : true,
        type : String
    },
    name:{
        require : true,
        type : String
    },
    productImage:{
        type :String,
    },
    price: {
        type :Number,
        default : 0,
        require : true
    },
    stock: {
        type :Number,
        default : 0
    },
    category :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "category",
        require : true
    },
    Ower :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }

},{timestamps : true})
export const product = mongoose.model("product", productSchema)