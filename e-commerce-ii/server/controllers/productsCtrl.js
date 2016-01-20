
var Product = require('../models/product');

module.exports = {
    createProduct: function (req, res, next) {
        new Product(req.body).save(function (err, createProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(createProduct); }
        })
    },
    readProduct: function (req, res, next) {
        Product.find(req.query).exec(function (err, readProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(readProduct); }
        })
    },
    updateProduct: function (req, res, next) {
        Product.findByIdAndUpdate(req.query.id), { $set: req.body }, function (err, updateProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(updateProduct); }
        }
    },
    deleteProduct: function (req, res, next) {
        Product.findByIdAndRemove(req.query.id, function (err, deleteProduct) {
            if (err) { res.status(500).send(err); }
            else { res.send(deleteProduct); }
        })
    }
};