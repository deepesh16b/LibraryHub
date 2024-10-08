import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
// import { v4 as uuid } from "uuid";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Route from "./routes/route.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 10000;

const user = process.env.USER_NAME;
const password = process.env.USER_PASSWORD;

const startServer = async () => {
  try {
    await Connection(user, password);
    DefaultData();

    app.use("/", Route);

    app.get("/getKey", (req, res) => {
      console.log("getapikey successsss");
      res.status(200).json({ key: process.env.RAZORPAY_API_KEY });
    });

    app.listen(PORT, () => console.log(`Server started at port ${PORT}!`));
  } catch (error) {
    console.error("Failed to connect to the database", error);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
