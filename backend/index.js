const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend is working 🚀"
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Frontend successfully connected to backend 🎉"
  });
});
 
console.log("Backend is running!");
module.exports = app;


