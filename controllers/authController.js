import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, address, phone, question } = req.body;

    // Validation
    if (!name || !password || !email || !address || !phone || !question) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await userModel.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User already registered. Please login.",
      });
    }

    // Register user
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      question,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully 😊",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Registration error 😢",
      error: error.message,
    });
  }
};

// POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    // Check if the user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Decrypt the password
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        question: user.question,
        role: user.role    },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Login error",
      error: error.message,
    });
  }
};

// forgotpasswordcontroller
export const forgotPasswordController = async (req, res) => {
  try {
    const { email, question, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!question) {
      res.status(400).send({ message: "Question is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }

    // check
    const user = await userModel.findOne({ email, question });
    if (!user) {
      res.status(404).send({
        success: false,
        message: "Invalid Email or Answer ",
      });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findByIdAndUpdate(user._id, { passwored: hashed });
    res.status(200).send({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Somting went wrong",
      error,
    });
  }
};

// test controller
export const testController = async (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
