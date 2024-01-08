import mongoose, { trusted } from "mongoose";

// this is knoe as mini model for some specificed detailes 
const OrderItemsSchema = new mongoose.Schema({
    productId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "product"
    },
    quantity : {
        type : Number,
        require: true
    }
})
const orderschema = new mongoose.Schema({
    OrderPrice :{
        type :Number,
        require: true
    },
    orderinfo:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    OrderItems: {
        type : [OrderItemsSchema]
    },
    Address: {
        type : String,
        require :true
    },
    Status : {
        type :String,
        enum: ["PENDING", "CANCELLED", "DELIVERED"],
        default: "PENDING"  
    }
},{timestamps : true})
export const order = mongoose.model("order", orderschema)