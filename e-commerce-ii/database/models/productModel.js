/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');

/** Schema Object*/
var sightingSchema = mongoose.Schema({
    title: {type: 'String', unique: 'Bolean', required: true, index: 'String'},
    description: {type: 'String', required: true},
    price: {type: 'Number', required: true, min: 0}
});