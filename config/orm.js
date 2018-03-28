var connection = require("./connection.js");

var orm = {
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insert: function (table, val, cb) {
        var queryString = "INSERT INTO" + table + " (burger_name, devoured) VALUES ('" + val + "', " + false + ");"
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function (table, id, cb) {
        var queryString = "UPDATE" + table + "SET devoured=" + true + "WHERE id=" + id + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};

module.exports = orm;