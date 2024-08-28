import express from "express";
import router from "./routes/index.js";
import { Server } from "socket.io";
const app = express();

app.use(express.json());
const port = process.env.PORT || 4000;

app.use("/api", router);
// app.get("/api/welcome", (req, res)=>{
//     res.json({msg: "Welcome from The server", status: 201});
// })

const expressServer = app.listen(port, ()=>{
    console.log(`Server is running at PORT ${port}`)
})

export const io = new Server(expressServer, {
     cors: {
        origin: "*",
        credentials: true,
      },
});

io.on("connection", (socket) => {
    console.log("A new user has connected", socket.id);
  
    // Listen for incoming messages from clients
    socket.on("msgFromClient", (message) => {
        console.log("The message is: ", message)
        socket.emit("msgFromServer", "Hii There Iam from server");
    });
  
    // Handle disconnections
    socket.on("disconnect", () => {
      console.log(socket.id, " disconnected");
    });
  });
  