let msg = "";
const inputField = document.getElementById("inputField");
let container =document.getElementById('container');
const socket = io("http://localhost:3000");

inputField.addEventListener("change", (e)=>{
    msg = e.target.value;
    // console.log(msg);
    socket.emit("msgFromClient", msg)
})

socket.on("msgFromServer", (data)=>{
    // console.log(data);
    const div = document.createElement('div')
    div.innerHTML = data;
    container.appendChild(div);
    // socket.emit("msgFromClient", msg);
})