const express = require("express");
const app = express();
const shelterRoute = require("./routes/shelters")
const dogsRoute = require("./routes/dogs");
const adminRoute = require("./routes/admin");
const router = require("./routes/shelters");

//we can create a function and apply it as a middleware or
//use app.use to apply it to all the routers
// router.use((req, res, next) =>{
//     if(req.query.isAdmin){
//         next();
//     }
//     res.send("sorry! not and admin")
// });


app.use("/shelters", shelterRoute);
app.use("/dogs", dogsRoute);
app.use("/admin", adminRoute);


app.listen(3000, ()=>{
    console.log("Listening and running on port 3000!! ");
});