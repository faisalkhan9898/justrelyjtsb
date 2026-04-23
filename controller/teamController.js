import Team from "../models/Team.js";

// Create
export const createTeam = async (req, res) => {
  try {
    const team = new Team({
      name: req.body.name,
      role: req.body.role,
      description: req.body.description,
      image: req.file.filename,
    });

    await team.save();
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All
export const getAllTeam = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete
export const deleteTeam = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update
export const updateTeam = async (req, res) => {
  try {
    const updateData = {
      name: req.body.name,
      role: req.body.role,
      description: req.body.description,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await Team.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};