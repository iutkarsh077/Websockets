import { io } from "../server.js";
export async function Chat(req, res){
   try {
    io.on("connection", (socket)=>{
        console.log("A new User Connected", socket.id);
    })
    return res.status(201).json({msg: "All set", status: true});
   } catch (error) {
    return res.status(401).json({msg: "Something went wrong", status: false});
   }
}