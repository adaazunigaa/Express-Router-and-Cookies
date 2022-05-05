const express = require("express");
const app = express();

app.get("/greet", (req,res)=>{
    res.send("hello")
});

app.get("/setname", (req,res)=>{
    res.cookie("name", "nuget zu");
    res.cookie("animal", "cat");
    res.send("Send you a cookie");
});

app.listen(3000, ()=>{
    console.log("Listenign on port 3000")
})
