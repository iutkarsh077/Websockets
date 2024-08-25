import express from "express";
import { Server } from "socket.io";
const app = express();

app.use(express.static("public"));
const expressServer = app.listen(3000, ()=>{
    console.log("Server is running or port 3000");
})

const io = new Server(expressServer);

io.on("connection", (socket)=>{
    console.log("A new User connected: ", socket.id);
    // socket.emit("msgFromServer", "Hii I am Server");

    socket.on("msgFromClient", (data)=>{
        console.log(data);
        io.emit("msgFromServer", data)
    })
})