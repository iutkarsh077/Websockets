import { useState } from "react";
import io from "socket.io-client";
const newSocket = io("http://localhost:4000");
const Chat = () => {
  const [message, setMessage] = useState("");

  if(newSocket){
    newSocket.on("msgFromServer", (data: any) => {
        console.log("Message from server:", data);
      });
  }


  const sendMessage = () => {
    if (message.trim()) {
      newSocket.emit("msgFromClient", message);
      setMessage(""); 
    }
  };

  if (!newSocket) {
    return (
      <div className="overflow-hidden flex justify-center items-center h-screen w-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <input
        type="text"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-black border-2 border-white"
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
