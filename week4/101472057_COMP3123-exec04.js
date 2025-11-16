const { Console } = require('console');
const express = require('express');
 
const app = express();
const SERVER_PORT = process.env.PORT || 3000;

express.static();

app.use(express.json());

app.get("/hello", (req, res)=>{
    res.send("HEllo Express Js");
});

app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const Lastname = req.query.lastname || "Patel";
  res.json({ firstname, Lastname });
});


app.post("/user/:firstname/:Lastname",(req,res)=>{
    const {firstname, Lastname} = req.params;
    res.json({firstname,Lastname});
});

app.post("/users", (req, res) => {
  const users = Array.isArray(req.body) ? req.body : [];
  res.json(users);
});

app.listen(SERVER_PORT,()=>{
    console.log("Server Started Successfully");
})