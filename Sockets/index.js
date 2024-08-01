const http = require("http");
const express = require("express");
const path = require("path");
const { Server } = require("socket.io");
const { Socket } = require("dgram");
const { log } = require("console");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

//Socket.io
io.on("connection", (Socket) => {
  Socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.status(200).sendFile("./public/index.html");
});

server.listen(3000, () => console.log("server is listing on 3000"));
