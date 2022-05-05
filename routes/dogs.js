const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.send("All dogs")
});
router.get("/:id", (req, res) =>{
    res.send("viwing one dog")
});
router.get("/:id/edit", (req, res) =>{
    res.send("Edit dog info")
});

module.exports = router;