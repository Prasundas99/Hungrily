import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import {
  homeRouter,
  userRouter,
  foodRequestRouter,
  heatmapRouter,
} from "./routes/index.js";
import { errorHandler, notFoundHandler } from "./middlewares/index.js";
dotenv.config();

process.env.NODE_ENV === "test" ? connectLocalDB() : connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || "development";

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api endpoints
app.use(homeRouter);
app.use("/api/users", userRouter);
app.use("/api/requests", foodRequestRouter);
app.use("/api/heatmap", heatmapRouter);

// error handling middlewares
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(5000, () => {
  console.info(`app running on ${environment} mode at port ${PORT} `);
});

export default app;
