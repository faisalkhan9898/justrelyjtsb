import Contact from "../models/Contact.js";

// CREATE (Only once)
export const createContact = async (req, res) => {
  try {
    const existing = await Contact.findOne();

    if (existing) {
      return res.status(400).json({
        message: "Contact info already exists. Please update instead.",
      });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findOne().sort({ createdAt: -1 });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE
export const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE (optional)
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};