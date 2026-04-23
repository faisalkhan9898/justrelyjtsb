import express from "express";
import multer from "multer";
import { createBanner, getBanners, deleteBanner, updateBanner } from "../controller/bannerController.js";

const router = express.Router();

// Multer Storage
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
router.post("/", upload.single("video"), createBanner);
router.get("/", getBanners);
router.put("/:id", upload.single("video"), updateBanner); // ✅ UPDATE
router.delete("/:id", deleteBanner);

export default router;