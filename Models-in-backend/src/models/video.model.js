import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        VideoFile: {
            type: String,
            required: true
        },
        Thumbnail: {
            type: String,
            required: true
        },
        Title: {
            type: String,
            required: true
        },
        Description: {
            type: String,
            required: true
        },
        Duration: {
            type: Number,
            required: true
        },
        Views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        Owner: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    },
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);
