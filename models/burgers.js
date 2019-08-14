var orm = require("../config/orm.js");

var burger = {

    allBurgers: function(cb){
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },
    updateBurgers: function(id, cb){
        var condition = "id="+id;
        orm.update("burger", {
            devoured: true 
        }, condition, cb)
    }
};

module.exports = burger;