import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String, // important if using multer
            required: true,
        },
    },
    { timestamps: true },

)

export default mongoose.model("Team", teamSchema);