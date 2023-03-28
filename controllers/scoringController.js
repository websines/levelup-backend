import Score from "../models/Scores.model.js";

export const averageScore = async (req, res) => {
  //const { id: userID } = req.query.id;

  try {
    const { userID, scores } = req.body;

    if (!scores || scores.length !== 10) {
      return res
        .status(400)
        .json({ message: "Scores for all 10 questions are required" });
    }

    const totalScore = scores.reduce((acc, curr) => acc + curr.score, 0);
    const averageScore = totalScore / 10;

    const score = new Score({
      userID,
      scores,
      averageScore,
    });

    await score.save();

    res.status(201).json({ message: "Score submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAverageScore = async (req, res) => {
  try {
    const { id: userID } = req.params.id;

    console.log(userID);

    const userScore = await Score.findOne({ userID: userID });

    console.log(userScore.id);

    res.status(200).json({
      success: true,
      mentalHealthScore: userScore.averageScore,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
