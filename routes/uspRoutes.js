import express from "express";
import multer from "multer";
import {
  createUsp,
  getUsps,
  deleteUsp,
  updateUsp,
} from "../controller/uspController.js";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("icon"), createUsp);
router.get("/", getUsps);
router.put("/:id", upload.single("icon"), updateUsp);
router.delete("/:id", deleteUsp);

export default router;