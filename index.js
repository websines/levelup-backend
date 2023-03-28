import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import macroRoutes from "./routes/macroRoutes.js";
import mentalHealthRoutes from "./routes/mentalHealthRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 1337;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.disable("x-powered-by");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    app.listen(PORT, () => {
      console.log(`Server succesfully started at PORT : ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("Works");
});

app.use("/api", authRoutes);
app.use("/api", macroRoutes);
app.use("/api", mentalHealthRoutes);
