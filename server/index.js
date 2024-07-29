// index.js
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");
const userRoutes = require("./routes/user.routes");

const express = require("express");
const port = process.env.PORT || 5000;

const { app, server } = require("./socket/socket");

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' }); // Files will be saved in the 'uploads' directory

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Route to handle file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  res.status(200).send('File uploaded successfully.');
});

app.use("/auth", authRoutes);
app.use("/messages", messageRoutes);
app.use("/users", userRoutes);

try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to MongoDB");

  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log("Error Connecting:", error.message);
}
