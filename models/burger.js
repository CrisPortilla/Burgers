var orm = require("../config/orm.js");

var burger = {
    All: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    create: function(name, cb) {
        orm.insert("burgers", name, function(res) {
            cb(res);
        });
    },

    Update: function(id, cb) {
        orm.update("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burger; 