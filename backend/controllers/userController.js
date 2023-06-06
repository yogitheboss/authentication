// importing asyncHandler , User model and generateToken 
import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc authenticate user
// route POST api/users/
// access Public
const registerUser = asyncHandler(async (req, res) => {

  // getting name,email and password from req.body
  const { name, email, password } = req.body;

  // checking if user already exist
  const userExist= await User.findOne({email})
  
  // if user exist then throw error
  if(userExist){
    res.status(409)
    throw new Error("User already exist")
  }
  // if no user exist then create user
  const user= await User.create({name,email,password})

  // if user created successfully then generate token and send response
  if(user){

    // generating token
    generateToken(res,user._id)
    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email
    })
  }else{
    // handling error
    res.status(400);
    throw new Error("Invalid user data")
  }


});

// @desc authenticate user
// route POST api/users/auth
// access Public
const authUser = asyncHandler(async (req, res) => {

    // getting email and password from req.body
    const { email, password } = req.body;

    // checking if user already exist
    const user= await User.findOne({email})

    // if user exist then check if password is correct
    if(user && await user.matchPasswords(password)){
        generateToken(res,user._id)
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
      }else{
        // handling error
        res.status(400);
        throw new Error("Invalid email or password")
      }

});

// @desc logout user
// route POST api/users/logout
// access Public
const logoutUser = asyncHandler(async (req, res) => {
  // clearing cookie
    res.cookie('jwt','',{
        httpOnly:true,
        //  setting cookie to expire immediately
        expires:new Date(0)
    })
    res.status(200).json({message:"User logged out"})
});

// @desc get user profile
// route get api/users/profile
// access private
const getUser = asyncHandler(async (req, res) => {
  res.send("Profile of User");
});

// @desc update user profile
// route put api/users/profile
// access private
const updateUser = asyncHandler(async (req, res) => {
  res.send("Profile Update");
});

export { authUser, registerUser, logoutUser, getUser, updateUser };
