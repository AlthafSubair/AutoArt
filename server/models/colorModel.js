import mongoose from "mongoose";

const colorSchema = mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        }, category: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        }
    }
);

const Color = mongoose.model("color", colorSchema);

export default Color;