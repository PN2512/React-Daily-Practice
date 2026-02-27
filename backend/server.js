const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/registerDB")
  .then(() => console.log("MongoDb Connected Successfully"))
  .catch((err) => console.log("MongoDB Connection Error"));

// Create user Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//creat model
const User = mongoose.model("User", userSchema);
//Temporary database(array)
// let users =[];

// Test route
// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

//=================================================//
// Register API

app.post("/registerUser", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "Username and Password are required",
    });
  }

  try {
    // Check if user already exists in MongoDB
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists",
      });
    }

    // Create new user
    // const newUser = new User({ username, password });

    //Hash password ====>

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save to MongoDB
    await newUser.save();

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

//==================================================//
// login Api
app.post("/loginUser", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const isMatch =await bcrypt.compare(password,user.password);

    if(!isMatch){
      return res.status(401).json({
        message:"Invalid username or password"
      });
    }


    res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

// Start server
app.listen(8087, () => {
  console.log("Server running on port 8087");
});
