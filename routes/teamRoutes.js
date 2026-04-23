import express from "express";
import {
  createTeam,
  getAllTeam,
  deleteTeam,
  updateTeam,
} from "../controller/teamController.js";
import multer from "multer";

const router = express.Router();

// Image Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Create
router.post("/", upload.single("image"), createTeam);

// Get All
router.get("/", getAllTeam);

// Delete
router.delete("/:id", deleteTeam);

// Update
router.put("/:id", upload.single("image"), updateTeam);

export default router;