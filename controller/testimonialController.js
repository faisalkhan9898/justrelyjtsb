import Testimonial from "../models/Testimonial.js";

// CREATE
export const createTestimonial = async (req, res) => {
  try {
    const { name, role, message } = req.body;

    const testimonial = await Testimonial.create({
      name,
      role,
      message,
      image: req.file ? req.file.filename : null,
    });

    res.status(201).json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({
      createdAt: -1,
    });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateTestimonial = async (req, res) => {
  try {
    const { name, role, message } = req.body;

    const updateData = { name, role, message };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(testimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE
export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};