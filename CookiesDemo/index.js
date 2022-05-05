const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("thisisasecret"));


app.get("/greet", (req,res)=>{
    const {name = "No-name" } = req.cookies;
    console.log(req.cookies);
    res.send("hello there, " + name);
});

app.get("/setname", (req,res)=>{
    res.cookie("name", "nuget zu");
    res.cookie("animal", "cat");
    res.send("Send you a cookie");
});

app.get("/getsignedcookie", (req, res)=>{
    res.cookie("fruit", "mango", {signed: true});
    res.send("cookie was signed")
});

app.get("/verifyfruit", (req,res)=> {
    res.send( req.signedCookies)
})

app.listen(3000, ()=>{
    console.log("Listenign on port 3000")
})
