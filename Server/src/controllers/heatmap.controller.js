import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import foodRequest from "../model/foodRequest.model";

/**
 * @Description get all coordinates of foodRequests
 * @route /api/heatmap/usermap
 * @access Public
 */
export const getUserFoodRequestCoordinates = asyncHandler(async (req, res) => {
  foodRequest
    .find()
    .populate("madeBy", "geometry")
    .exec(function (err, request) {
      if (err) {
        res.status(404);
        throw new Error("Oops, something went wrong");
      }

      //   Getting coordinates from the populated objects
      let coordArray = [];
      request.forEach((req, index) => {
        coordArray.push(req.madeBy.geometry.coordinates);
      });

      res.status(200).send(coordArray);
    });
});

/**
 *
 *
 */
