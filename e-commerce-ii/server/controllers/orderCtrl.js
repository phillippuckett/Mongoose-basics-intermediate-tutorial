var Order = require('../models/Order');

module.exports = {
    createOrder: function (req, res, next) {
        new Order(req.body).populate('user._id', 'user.name').save(function (err, createOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(createOrder); }
        })
    },

    readOrder: function (req, res, next) {
        Order.find(req.query).populate('user').exec(function (err, readOrder) {
            if (err) { res.status(500).send(err); }
            else { res.send(readOrder); }
        })
    },
};
