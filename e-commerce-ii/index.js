/** Require */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

/** Application */
var app = express();
app.use(bodyParser.json());

/** Ene Points */
app.get('api/', function () { });
app.post('api/', function () { });
app.put('api/', function () { });
app.delete('api/../:id', function () { });

/** Ports and Channels */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Listening on ' + nodePort);
});

var mongoUri = 'mongodb://localhost:27017'
mongoose.connect(mongoUri);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log("Mongo Database : 27017"); }
});

/* mongodb.org/manual/reference/operator... */