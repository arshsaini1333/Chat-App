const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
const port = 8080;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connect");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listning to port ${process.env.PORT}`);
});
