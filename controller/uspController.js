import Usp from "../models/Usp.js";

// CREATE USP
export const createUsp = async (req, res) => {
  try {
    const { title } = req.body;

    const usp = await Usp.create({
      title,
      icon: req.file ? req.file.filename : null,
    });

    res.status(201).json(usp);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL USP
export const getUsps = async (req, res) => {
  try {
    const usps = await Usp.find().sort({ createdAt: -1 });
    res.json(usps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE USP
export const updateUsp = async (req, res) => {
  try {
    const { title } = req.body;

    const usp = await Usp.findById(req.params.id);

    if (!usp) {
      return res.status(404).json({
        message: "USP not found",
      });
    }

    // Update title
    usp.title = title || usp.title;

    // Update icon if new file uploaded
    if (req.file) {
      usp.icon = req.file.filename;
    }

    await usp.save();

    res.status(200).json(usp);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE USP
export const deleteUsp = async (req, res) => {
  try {
    await Usp.findByIdAndDelete(req.params.id);
    res.json({ message: "USP deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};