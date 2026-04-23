import mongoose from "mongoose";
import { type } from "os";

const uspSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    icon:{
        type:String,
        required:true,
    }
},{timestamps:true})

const Usp = mongoose.model("Usp",uspSchema);

export default Usp;