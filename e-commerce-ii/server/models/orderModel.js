/** These 'Require's are necessary for to set up the schema*/
var mongoose = require('mongoose');
var Product = require('./Product');
var User = require('./User');
var CartSchema = require('./Cart');
var Schema = mongoose.Schema;

/** Schema Object */
var orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    quanity: { type: Number, min: 1, required: true },
    placed: { type: Date, required: true, default: Date.now },
    products: [{
        product: productSchema,
        quantity: { type: Number, min: 1, required: true },
        price: { type: String, required: true }
    }],
})

/** The model for the schema above*/
module.exports = mongoose.model('Order', orderSchema);