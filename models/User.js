import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    image: String,

    provider: {
      type: String,
      enum: ["google", "github", "credentials"],
      required: true,
    },

    plan: {
      type: String,
      enum: ["lite", "pro"],
      default: "lite",
    },
    // daily credit tracking
    credits: {
      type: Number,
      default: 20
    },

    // last day when credits were reset (used for lazy reset)
    lastCreditReset: {
      type: Date,
      default: null,
    },

    // optional: user's IANA timezone (e.g., "America/Los_Angeles")
    timezone: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);
