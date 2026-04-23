import About from "../models/About.js";

// CREATE About
export const createAbout = async (req, res) => {
  try {
    const { heading, paragraph } = req.body;

    const about = await About.create({
      heading,
      paragraph,
      image:  req.file.filename,
    });

    res.status(201).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET About (Latest Record)
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne().sort({ createdAt: -1 });
    res.json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE About
export const updateAbout = async (req, res) => {
  try {
    const { heading, paragraph } = req.body;

    const about = await About.findById(req.params.id);

    if (!about) {
      return res.status(404).json({
        message: "About not found",
      });
    }

    // Update fields
    about.heading = heading || about.heading;
    about.paragraph = paragraph || about.paragraph;

    // If new image uploaded
    if (req.file) {
      about.image = req.file.filename;
    }

    await about.save();

    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE About
export const deleteAbout = async (req, res) => {
  try {
    const deletedAbout = await About.findByIdAndDelete(req.params.id);

    if (!deletedAbout) {
      return res.status(404).json({
        message: "About not found",
      });
    }

    res.status(200).json({
      message: "About deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};