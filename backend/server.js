import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js'

// configure dotenv
dotenv.config();

// rest object
const app = express();

// database config

connectDB();
// middle ware
app.use(express.json());
app.use(morgan("dev"));





// routes
app.use("/api/v1/auth", authRoutes);




// rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome To Multivendor E-commerce MERN STACK</h1>");
});

// for port`

const PORT = process.env.PORT || 8080;

// run listerner
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white
  );
});
