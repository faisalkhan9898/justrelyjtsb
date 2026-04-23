import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bannerRoutes from "./routes/bannerRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import uspRoutes from "./routes/uspRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
// Routes
app.use("/api/banner",bannerRoutes);
app.use("/api/about",aboutRoutes);
app.use("/api/usp", uspRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/contact", contactRoutes);

// Sttatic Routes
app.use("/uploads",express.static("uploads"))



// MONGODB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("Mongodb Connected"))
.catch((error)=>console.log(error))

app.get("/",(req,res)=>{
    res.send("Api Running")
})


app.listen(5000,()=>{
    console.log("my server is running on port 5000")
})