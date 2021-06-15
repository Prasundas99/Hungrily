import express from "express";
import { createFoodRequest } from "../controllers/foodRequest.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/user", verifyToken, createFoodRequest);

export { router as foodRequestRouter };
