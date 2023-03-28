import UserModel from "../models/User.model.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { username, email, password, image } = req.body;

    const user = new UserModel({
      username,
      email,
      password,
      image,
    });

    await user.save();

    res.status(201).json({
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};
