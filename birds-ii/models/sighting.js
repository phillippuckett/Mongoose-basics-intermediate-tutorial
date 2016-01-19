/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');

/** Schema Object*/
var sightingSchema = mongoose.Schema({
    name: { type: 'String' },
    order: { type: 'String' },
    status: { type: 'String' },
    confirmed: { type: 'Bolean' },
    numberSeen: { type: 'Number' }
});

/** Make the model for the schema above*/
module.exports = mongoose.model('sighting', sightingSchema);