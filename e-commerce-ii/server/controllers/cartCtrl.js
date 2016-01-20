var User = require('../models/User');

module.exports = {
    addToCart: function (req, res, next) {
        User.findById(req.params.userId, function (err, user) {
            if (err) { res.status(500).send(err); }
            else {
                user.cart.push(req.query.productId);
                user.save(function () {
                    User.findById(req.params.userId).populate('cart')
                        .exec(function (err, user) {
                            res.status(200).send(user.cart);
                        })
                })
            }
        })
    },

    removeFromCart: function (req, res, next) {
        User.findById(req.params.userId, function (err, user) {
            if (err) { res.status(500).send(err); }
            else {
                for (var i = user.cart.length - 1; i >= 0; i--) {
                    var currentProduct = user.cart[i];
                    if (currentProduct == req.query.productId) {
                        user.cart.splice(i, 1);
                        break;
                    }
                }
                User.save(function () {
                    User.findById(req.params.userId).populate('cart')
                        .exec(function (err, user) {
                            if (err) { res.status(500).send(err); }
                            else { res.status(200).send(user.cart); }
                        })
                })
            }
        })
    },
};
