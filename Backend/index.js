const express = require("express");
const mongoose = require("mongoose");
const app =express();

const routes = require("./routes/TodoRoutes");
const PORT = process.env.port || 5000;


require('dotenv').config();
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api",routes);
app.listen(PORT,()=>{
    console.log(`Your server is running successfully on PORT ${PORT}`)
})