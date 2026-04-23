import mongoose  from "mongoose";


const aboutSchema = new mongoose.Schema({
    heading:{
        type:String,
        require:true,
    },
    paragraph:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    }
},{timestamps:true})

export default mongoose.model("About",aboutSchema)