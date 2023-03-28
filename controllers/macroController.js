import UserModel from "../models/User.model.js";

export const macros = async (req, res) => {
  const { age, gender, weight, height, activityLevel } = req.body;

  //   const { id } = req.query.id;
  //   const user = await UserModel.findById({ _id: id });

  //   const gender = user.gender;
  //   const age = user.age;
  //   const weight = user.currentWeight;
  //   const height = user.height;

  if (!activityLevel) {
    return res.status(400).send("Missing or invalid inputs");
  }

  let bmr;
  if (gender === "male") {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else if (gender === "female") {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  } else {
    return res.status(400).send("Invalid gender");
  }

  let tdee;
  switch (activityLevel) {
    case "sedentary":
      tdee = bmr * 1.2;
      break;
    case "lightly active":
      tdee = bmr * 1.375;
      break;
    case "moderately active":
      tdee = bmr * 1.55;
      break;
    case "very active":
      tdee = bmr * 1.725;
      break;
    case "extra active":
      tdee = bmr * 1.9;
      break;
    default:
      return res.status(400).send("Invalid activity level");
  }

  const protein = Math.round((tdee * 0.25) / 4);
  const fat = Math.round((tdee * 0.25) / 9);
  const carbs = Math.round((tdee - protein * 4 - fat * 9) / 4);

  return res.status(200).json({
    calories: tdee,
    protein: protein,
    fats: fat,
    carbs: carbs,
  });
};
