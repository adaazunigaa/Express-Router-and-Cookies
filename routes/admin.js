const express = require("express");
const router = express.Router();

router.use((req, res, next) =>{
    if(req.query.isAdmin){
        next();
    }
    res.send("sorry! not and admin")
});



router.get("/topSecret", (req, res) => {
    res.send("this is top secret");
});

router.get("/deleteEverything", (req, res) => {
    res.send("Deleted it all");
});


module.exports = router;