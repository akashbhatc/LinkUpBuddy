export const getAlumni = async (req, res) => {
    try {
      const { id } = req.params;
      const alumni = await Alumni.findById(id);
      res.status(200).json(alumni);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };