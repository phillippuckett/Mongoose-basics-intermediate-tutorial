/** This 'Require' is necessary for to set up the schema*/
var mongoose = require('mongoose');

/** Schema Object*/
var sightingSchema = mongoose.Schema({
    name: { type: 'String', lowercase: true },
    order: { type: 'String', lowercase: true, maxlength: 20 },
    status: {
        type: 'String',
        lowercase: true,
        enum: [
            'extinct',
            'extinct in the wild',
            'critically endangered',
            'endangered',
            'vulnarable',
            'near threatened',
            'conservation dependant',
            'least concern'
        ]
    },
    confirmed: { type: 'Bolean', default: false },
    numberSeen: { type: 'Number', min: 1 }
});

/** Make the model for the schema above*/
module.exports = mongoose.model('sighting', sightingSchema);