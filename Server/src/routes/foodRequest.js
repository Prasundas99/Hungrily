import express from "express";
import {
  createFoodRequest,
  getFoodRequests,
} from "../controllers/foodRequest.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/user", verifyToken, createFoodRequest);
router.get("/user", verifyToken, getFoodRequests);

export { router as foodRequestRouter };
