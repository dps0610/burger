var express = require("express");
var router = express.Router()

var burger = require("../models/burgers.js");


//this page will handle routing
// router.get("/", function(req, res){
//     res.redirect("/burgers")
    
// });


router.get("/", function(req, res){
    burger.allBurgers(function(data){
        res.render("index", { burger: data });

    });
    
});

router.post("/api/burgers", function(req, res){
    burger.addBurger([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    burger.updateBurgers(req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;