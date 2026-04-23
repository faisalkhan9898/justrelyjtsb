import Service from "../models/Service.js";

// ✅ Create
export const createService = async (req, res) => {
  try {
    const service = new Service({
      title: req.body.title,
      description: req.body.description,
      icon: req.file.filename,
    });

    await service.save();
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All
export const getAllService = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete
export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update
export const updateService = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
    };

    if (req.file) {
      updateData.icon = req.file.filename;
    }

    const updated = await Service.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};