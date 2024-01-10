import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate  from "mongoose-aggregate-paginate-v2";

const  videoSchema = new Schema(
    {
        VideoFile:{
            type: string ,
            require: true
        },
        Thumbnail:{
            type: string ,
            require: true
        },
        Title:{
            type: string ,
            require: true
        },
        Description:{
            type: string ,
            require: true
        },
        Duration:{
            type: Number,
            require: true
        },
        Views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        Owner:{
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema)