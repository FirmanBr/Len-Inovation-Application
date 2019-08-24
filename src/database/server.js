var cors = require('cors');
var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    controller = require('./Api/IzinApi');
    controller1 = require('./Api/TimeApi');

    
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Starting ' + port);