import express from "express";

const app = express();

const port = process.env.PORT || 4000;

app.get("/api/welcome", (req, res)=>{
    res.json({msg: "Welcome form The server", status: 201});
})

app.listen(port, ()=>{
    console.log(`Server is running at PORT ${port}`)
})