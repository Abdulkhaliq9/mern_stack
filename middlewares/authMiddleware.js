import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// protect routes token based
export const verifyToken = async (req, res, next) => {
  // Get token from header
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // decrypting it
    req.user = decode;   
    next();
  } catch (error) {
    console.log(error);
  }
};



// admin access
export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middelware",
    });
  }
};
  
