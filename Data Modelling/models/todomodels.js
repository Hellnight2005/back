// todo mean the inner layer of user models 
// we can get data from user models to inner models  

import mongooose from "mongoose"
const todoSchema = new mongooose.Schema({
    Content:{
        type: String,
        require:true,
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        // this command is use for to import data from different file 
        type: mongooose.Schema.Types.ObjectId,
        // here ref is know as Reference of above file 
        ref: "User"
    },
    subtodo:[ 
        // here we stroed values in array form from different file 
        {
            type: mongooose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]
},{timestamps: true})
export const Tdo = new mongooose.model("Todo", todoSchema)