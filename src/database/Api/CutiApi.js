'use strict';

var response = require('../res');
var connection = require('../conn');

exports.CutiRead = function(req, res) {
    connection.query('SELECT * FROM cuti', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.CutiCreate = function(req, res) {
    
  var No = req.body.No;
  var Nik1 = req.body.Nik1;
  var Username1 = req.body.Username1;
  var Jabatan1 = req.body.Jabatan1;
  var Bagian1 = req.body.Bagian1;
  var Direktorat1 = req.body.Direktorat1;
  var Tahun = req.body.Tahun;
  var Selama = req.body.Selama;
  var TanggalIzin = req.body.TanggalIzin;
  var SampaiIzin = req.body.SampaiIzin;
  var AlamatCuti = req.body.AlamatCuti;
  var Perihal = req.body.Perihal;
  var Statuscuti = req.body.Statuscuti;

  connection.query('INSERT INTO cuti (Nik, Nama, Jabatan, Bagian, Direktorat, Tahun, Selama, TanggalIzin, SampaiIzin, AlamatCuti, Perihal, Statuscuti ) values (?,?,?,?,?,?,?,?,?,?,?,?)',
  [ Nik1, Username1, Jabatan1, Bagian1, Direktorat1, Tahun, Selama, TanggalIzin, SampaiIzin, AlamatCuti, Perihal, Statuscuti ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Pengajuan Cuti Berhasil!", res)
   
      }
  });
};


exports.CutiUpdate = function(req, res) {
    

  var Nik1 = req.body.Nik1;
  var Statuscuti = req.body.Statuscuti;


  connection.query('UPDATE cuti SET Statuscuti = ?  WHERE Nik = ?',
  [ Statuscuti, Nik1 ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil merubah Status Permohonan Cuti", res)
      }
  });
};

exports.CutiDelete = function(req, res) {
    
  var Nik1 = req.body.Nik1;

  connection.query('DELETE FROM cuti WHERE Nik = '+Nik1,
 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil menghapus Permohonan Cuti!", res)
      }
  });
    console.log(req)
};

exports.CutiFind = function(req, res) {
    
  var Nik1 = req.params.Nik;

  connection.query('SELECT * FROM cuti where Nik = ?',
  [ Nik1 ], 
  function (error, rows, fields){
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