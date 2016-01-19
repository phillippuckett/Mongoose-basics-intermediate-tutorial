/** Require */
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

/** Controllers */


/** App */
var app = express();
app.use(bodyParser.json());

/** End Points */


/** Ports and Channels */
var mongoUri = 'mongodb://localhost:27017/tacos'
mongoose.connect(mongoUri);
mongoose.connection.once('open', function () {
    console.log("Mongo Database : 27017");
});

var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Node Port : ' + nodePort);
});