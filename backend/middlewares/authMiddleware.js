import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";

const protect = asyncHandler(async function (req, res, next) {
  let token;
  token = req.cookies.jwt;
  if (token) {
    try {
      // give details excluding password
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (err) {
      res.status(401);
      throw new Error("Not authorized , invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized , no token");
  }
});

export { protect };
