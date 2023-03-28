import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  scores: [
    {
      questionNumber: { type: Number, required: true },
      score: { type: Number, required: true },
    },
  ],
  averageScore: { type: Number },
});

export default mongoose.model("Score", scoreSchema);
