import express from "express";
import multer from "multer";
import { createAbout,
  getAbout, 
  updateAbout,
  deleteAbout, 
} from "../controller/aboutController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({storage})

router.post("/",upload.single("image"),createAbout);
router.get("/",getAbout);
router.put("/:id", upload.single("image"), updateAbout);
router.delete("/:id", deleteAbout);

export default router;
