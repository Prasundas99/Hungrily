import mongoose from "mongoose";
import generateToken from "../utils/generateJwt";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";

/**
 * @description authenticate existing users and get auth token
 * @route GET /api/users/login
 * @public
 *
 */

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isVolunteer: user.isVolunteer,
      location: user.location,
      geometry: user.geometry,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("email or password is invalid");
  }
});

/**
 * @description register a new user
 * @route POST /api/users/
 * @public
 */
export const createUser = asyncHandler(async (req, res) => {
  const { name, password, email, userLocation, geometry } = req.body;
  const user = await User.findOne({ email: email });

  if (user) {
    res.status(401);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
    location: userLocation,
    geometry,
  });

  // send auth token as well

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isVolunteer: newUser.isVolunteer,
      location: newUser.location,
      geometry: newUser.geometry,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

/**
 * @description get profile of pre existing users
 * @route GET /api/users/profile
 * @private
 */
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      location: user.location,
      isVolunteer: user.isVolunteer,
      geometry: user.geometry,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

/**
 * @description update profile of existing user\
 * @route PUT /api/users/profile
 * @private
 */

export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user?._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isVolunteer = req.body.isVolunteer || user.isVolunteer;
    user.location = req.body.location || user.location;
    user.geometry = req.body.geometry || user.geometry;
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isVolunteer: updatedUser.isVolunteer,
      location: updatedUser.location,
      geometry: updatedUser.geometry,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});
