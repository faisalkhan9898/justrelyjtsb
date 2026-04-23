import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    video:String,
    title:String,
    buttonText:String
},{timestamps:true});

export default mongoose.model("Banner",bannerSchema);