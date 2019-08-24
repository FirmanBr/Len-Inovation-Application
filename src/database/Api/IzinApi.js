'use strict';

var response = require('../res');
var connection = require('../conn');

exports.IzinRead = function(req, res) {
    connection.query('SELECT * FROM izin', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.IzinCreate = function(req, res) {
    
  var No = req.body.No;
  var Nik = req.body.Nik;
  var Nama = req.body.Nama;
  var Jabatan = req.body.Jabatan;
  var Bagian = req.body.Bagian;
  var Direktorat = req.body.Direktorat;
  var Keterangan = req.body.Keterangan;
  var Tanggal = req.body.Tanggal;
  var Jam = req.body.Jam;
  var Status = req.body.Status;
  var Perihal = req.body.Perihal;

  connection.query('INSERT INTO izin (Nama, Nik, Jabatan, Bagian, Direktorat, Keterangan, Tanggal, Jam, Status, Perihal) values (?,?,?,?,?,?,?,?,?,?)',
  [ Nama, Nik, Jabatan, Bagian, Direktorat, Keterangan, Tanggal, Jam, Status, Perihal ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Pengajuan Izin Berhasil!", res)
   
      }
  });
};


exports.IzinUpdate = function(req, res) {
    

  var Nik = req.body.Nik;
  var Status = req.body.Status;


  connection.query('UPDATE izin SET Status = ?  WHERE Nik = ?',
  [ Status, Nik ], 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil merubah Status Permohonan Izin", res)
      }
  });
};

exports.IzinDelete = function(req, res) {
    
  var Nik = req.body.Nik;

  connection.query('DELETE FROM izin WHERE Nik = '+Nik,
 
  function (error, rows, fields){
      if(error){
          console.log(error)
      } else{
          response.ok("Berhasil menghapus Permohonan Izin!", res)
      }
  });
    console.log(req)
};

exports.IzinFind = function(req, res) {
    
  var Nik = req.params.Nik;

  connection.query('SELECT * FROM izin where Nik = ?',
  [ Nik ], 
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