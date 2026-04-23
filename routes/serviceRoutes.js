import express from "express";
import multer from "multer";
import {
  createService,
  getAllService,
  deleteService,
  updateService,
} from "../controller/serviceController.js";

const router = express.Router();

// ✅ Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// ✅ Create
router.post("/", upload.single("icon"), createService);

// ✅ Get All
router.get("/", getAllService);

// ✅ Delete
router.delete("/:id", deleteService);

// ✅ Update
router.put("/:id", upload.single("icon"), updateService);

export default router;