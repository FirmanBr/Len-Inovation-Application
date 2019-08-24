'use strict';

var response = require('../res');
var connection = require('../conn');

exports.LoginRead = function(req, res) {
    connection.query('SELECT * FROM login', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.index = function(req, res) {
    response.ok("PT Len Industri (Persero) API", res)
};