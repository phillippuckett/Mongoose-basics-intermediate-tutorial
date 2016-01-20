/** Require */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

/** Application */
var app = express();
app.use(express.static(__dirname + '/interface'));
app.use(bodyParser.json());
app.cors(cors());

/** Controllers */
var productsCtrl = require('./server/controllers/productsCtrl');
var usersCtrl = require('./server/controllers/usersCtrl');

/** End Points */
app.post('api/product', productsCtrl.createProduct);
app.get('api/product', productsCtrl.readProduct);
app.put('api/product', productsCtrl.updateProduct);
app.delete('api/product/:id', productsCtrl.deleteProduct);

app.post('/api/user', usersCtrl.createUser);
app.get('/api/user', usersCtrl.readUser);
app.put('api/user', usersCtrl.updateUser);
app.delete('api/user/:id', usersCtrl.deleteUser);

/** Ports and Channels */
var nodePort = 3000;
app.listen(nodePort, function () {
    console.log('Node Port : ' + nodePort);
});

var mongoUri = 'mongodb://localhost:27017'
mongoose.connect(mongoUri);
mongoose.connection.once('open', function (err) {
    if (err) { throw err; }
    else { console.log("Mongo Database : " + mongoUri); }
});

/* mongodb.org/manual/reference/operator... */