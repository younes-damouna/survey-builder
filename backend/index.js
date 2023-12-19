const express = require("express");
const { connectToMongoDB } = require("./configs/mongoDb.configs");

const app = express();
app.use(express.json());
require("dotenv").config();

// routes
// app.get("/hello", (req, res) => {
//   console.log("HELLO!!");
// });

// auth route
const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

app.listen(8000, () => {
    console.log("Server listining on PORT: ", 8000);
  
   
  
    connectToMongoDB();
  });