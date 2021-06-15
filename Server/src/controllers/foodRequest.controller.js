import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import foodRequest from "../model/foodRequest.model";

/**
 * @description get all food requests made by an user
 * @route GET /api/requests/user
 * @Access Private
 * @Role User
 */

export const getFoodRequests = asyncHandler(async (req, res) => {
  const foodRequestsByUser = await foodRequest.find({ madeBy: req.user._id });

  if (foodRequestsByUser) {
    res.status(200).send(foodRequestsByUser);
  } else {
    res.status(404).json({ message: "No user found! Please try again later" });
  }
});

/**
 * @description create food request
 * @route POST /api/requests/user
 * @access Private
 * @Role Volunteer
 */

export const createFoodRequest = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  console.log("user", user);
  if (user) {
    // find all volunteers within 2km radius of the user
    const volunteerWithinRange = await User.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: user.geometry.coordinates,
          },
          distanceField: "dist.calculated",
          maxDistance: 2000,
          spherical: true,
          query: { isVolunteer: true },
        },
      },
    ]);

    if (volunteerWithinRange.length > 0) {
      const closestVolunteer = volunteerWithinRange[0];

      // Create the food request

      console.log("Volunteer", closestVolunteer);

      const newFoodRequest = await foodRequest.create({
        madeBy: req.user._id,
        recievedBy: closestVolunteer._id,
        preference: req.body.preference,
      });

      if (newFoodRequest) {
        res.status(201).json({
          message: "Food requested from volunteers",
          email: closestVolunteer.email,
          RequestId: newFoodRequest._id,
          requestDetails: newFoodRequest,
        });
      }
    } else {
      res.status(404);
      throw new Error("No volunteers within range found");
    }
  } else {
    res.status(404);
    throw new Error("No user found");
  }
});
