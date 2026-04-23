import Banner from "../models/Banner.js";

// CREATE Banner
export const createBanner = async (req, res) => {
  try {
    const { title, buttonText } = req.body;

    const banner = await Banner.create({
      title,
      buttonText,
      video: req.file ? req.file.filename : null,
    });

    res.status(201).json(banner);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET All Banners
export const getBanners = async (req, res) => {
  try {
    const banners = await Banner.find().sort({ createdAt: -1 });
    res.json(banners);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

 // DELETE Banner
export const deleteBanner = async (req, res) => {
  try {
    const deletedBanner = await Banner.findByIdAndDelete(req.params.id);

    if (!deletedBanner) {
      return res.status(404).json({
        message: "Banner not found",
      });
    }

    res.status(200).json({
      message: "Banner deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE Banner
export const updateBanner = async (req, res) => {
  try {
    const { title, buttonText } = req.body;

    const banner = await Banner.findById(req.params.id);

    if (!banner) {
      return res.status(404).json({
        message: "Banner not found",
      });
    }

    // Update fields
    banner.title = title || banner.title;
    banner.buttonText = buttonText || banner.buttonText;

    // If new video uploaded
    if (req.file) {
      banner.video = req.file.filename;
    }

    const updatedBanner = await banner.save();

    res.status(200).json(updatedBanner);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};