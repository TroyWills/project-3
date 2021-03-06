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
    },

    deleteItem: function (req, res) {
        console.log(req.params.id);
        db.Grocery
            .deleteOne({ _id: req.params.id })
            .then(function (data) {
                console.log("delete data", data);
                res.json(data)
            })
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        db.Grocery
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}