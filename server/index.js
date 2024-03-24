const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messagesRoute.js");
const app = express();
const socket = require("socket.io");
require("dotenv").config();

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://chat-app-frontend-drab.vercel.app/login",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", userRoutes);
app.use("/api/messages", messageRoutes);
app.get("/", (req, res) => {
  res.send("Hello");
});
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

// const io = socket(server, {
//React Server
const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
