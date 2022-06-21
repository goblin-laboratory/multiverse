import express from "express";
import { createServer } from "http";
// import cors from "cors";
import { Server } from "socket.io";

const PORT = process.env.PORT || 3000;

const app = express();
// app.use(cors());
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (arg, callback) => {
    // TODO: 通过 Redis 或者 Kafaka 消息队列多进程处理
    // 新的用户连接
    const msg = JSON.parse(arg);
    console.log(msg);
    // 通知所有客户端
    callback("got it");
  });
  socket.on("disconnect", (reason) => {
    // TODO: 通过 Redis 或者 Kafaka 消息队列多进程处理
    // 用户连接断开
  });
});

httpServer.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
