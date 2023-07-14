import express from "express";
import config from "config";

import "./dbConnect.js"

import apiRouter from "./controllers/api/index.js";
const app = express();

const port = config.get("PORT");

//APP LEVEL MIDDLE WARE
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header("Access-Control-Allow-Methods", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({ success: "This is simple Application" });
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log("Server Started at Port : ", port);
});