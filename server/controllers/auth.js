import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Alumni from "../models/Alumni.js";
import Student from "../models/Student.js";
import Admin from "../models/Admin.js";
/* REGISTER ALUMNI */
export const register1 = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath, 
      companyName,
      location,
      occupation,
      passoutYear,
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newAlumni = new Alumni({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      companyName,
      location,
      occupation,
      passoutYear,
    });
    const savedAlumni = await newAlumni.save();
    res.status(201).json(savedAlumni);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
/* REGISTER STUDENT*/
export const register2 = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath, 
      passoutYear,
    } = req.body;

    const salt1 = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt1);

    const newStudent = new Student({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      passoutYear,
    });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGGING IN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const alumni = await Alumni.findOne({ email: email });
    if (!alumni) return res.status(400).json({ msg: "Alumni does not exist. " });

    const isMatch = await bcrypt.compare(password, alumni.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: alumni._id }, process.env.JWT_SECRET);
    delete alumni.password;
    res.status(200).json({ token, alumni });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const login2 = async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email: email });
    if (!student) return res.status(400).json({ msg: "Student does not exist. " });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete student.password;
    res.status(200).json({ token, student });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
