'use strict';

var response = require('../res');
var connection = require('../conn');

exports.TimeRead = function(req, res) {
    connection.query('SELECT * FROM checktime', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};


exports.TimeUpdate = function(req, res) {
    

  var Nik = req.body.Nik;
  var Reason = req.body.Reason;


  connection.query('UPDATE checktime SET Reason = ?  WHERE Nik = ?',
  [ Reason, Nik ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil Menambah Reason", res)

      }
  });
};



exports.index = function(req, res) {
    response.ok("PT Len Industri (Persero) API", res)
};