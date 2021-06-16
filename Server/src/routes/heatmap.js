import express from "express";
import { getUserFoodRequestCoordinates } from "../controllers/heatmap.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/usermap", getUserFoodRequestCoordinates);

export { router as heatmapRouter };
