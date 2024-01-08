import mongooose from "mongoose"
const SubtodoSchema = new mongooose.Schema({
    content: {
        type: String,
        require: true
    },
    complete: {
        type : Boolean,
        default : false
    },
    Createdby : {
        type : mongooose.Schema.Types.ObjectId,
        ref : "User"
    }
},{timestamps: true})
export const SubTodo = new mongooose.model("SubTod", SubtodoSchema)
