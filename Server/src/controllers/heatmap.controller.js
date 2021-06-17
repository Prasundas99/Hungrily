import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import User from "../model/user.model";
import foodRequest from "../model/foodRequest.model";

/**
 * @Description get all coordinates of foodRequests
 * @route /api/heatmap/usermap
 * @access Public
 */

/**
 * 
 * GeoJson Feature collections
 * {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-112.0372, 46.608058]
      }
    },{
      type: "Feature",
      properties: {
        "location": "something"
      },
      geometry: {
        type: Point,
        coordinates: []
      }
    }
  ]
}
 * 
 * 
 * 
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

      // //   Getting coordinates from the populated objects
      // let coordArray = [];
      // request.forEach((req, index) => {
      //   coordArray.push(req.madeBy.geometry.coordinates);
      // });

      let geoJsonFeature = {
        type: "FeatureCollection",
        features: [],
      };

      request.forEach((req) => {
        geoJsonFeature.features.push({
          properties: { reqOwner: req.madeBy._id },
          geometry: req.madeBy.geometry,
        });
      });

      res.status(200).send(geoJsonFeature);
    });
});

/**
 *
 *
 */
