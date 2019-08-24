'use strict';

module.exports = function(app) {
    var todoList = require('./Api/IzinApi');
    var todoList1 = require('./Api/LoginApi');
    var todoList2 = require('./Api/TimeApi');
    var todoList3 = require('./Api/CutiApi');

    app.route('/')
        .get(todoList.index);
    app.route('/IzinRead')
        .get(todoList.IzinRead);     
    app.route('/IzinRead')
        .post(todoList.IzinCreate);
    app.route('/IzinRead')
        .put(todoList.IzinUpdate);
    app.route('/IzinRead')
        .delete(todoList.IzinDelete);
    app.route('/IzinRead/:Nik')
        .get(todoList.IzinFind); 

    app.route('/LoginRead')
        .get(todoList1.LoginRead); 
        
    app.route('/Time')
        .get(todoList2.TimeRead);
    app.route('/Time')
        .put(todoList2.TimeUpdate);

    app.route('/Cuti')
        .get(todoList3.CutiRead);     
    app.route('/Cuti')
        .post(todoList3.CutiCreate);
    app.route('/Cuti')
        .put(todoList3.CutiUpdate);
    app.route('/Cuti')
        .delete(todoList3.CutiDelete);
    app.route('/Cuti/:Nik1')
        .get(todoList3.CutiFind); 
        
        
};