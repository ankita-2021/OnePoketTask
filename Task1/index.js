// Task 1: Basic Node.js Server
// Create a simple Node.js server that listens on port 3000 and responds with "Hello, World!"
// for all incoming HTTP requests. You can use any library or framework of your choice.

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// app.listen(3000);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
