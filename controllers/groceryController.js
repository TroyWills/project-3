const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Grocery
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel =>
                res.json(dbModel)
            )
            .catch(err => res.status(422).json(err));
    },

    findByCategory: function (req, res) {
        console.log(req.params.category)
        db.Grocery
            .find({ category: req.params.category })
            .then(dbModel => {
                console.log(dbModel)
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));

    }
}