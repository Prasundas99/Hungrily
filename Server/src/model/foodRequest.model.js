import mongoose from "mongoose";

const foodRequestSchema = new mongoose.Schema(
  {
    madeBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recievedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    preference: {
      type: String,
      default: "veg",
      required: true,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

const foodRequest = mongoose.model("FoodRequest", foodRequestSchema);
export default foodRequest;
