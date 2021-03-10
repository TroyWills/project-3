const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const Grocery = mongoose.model("Grocery", grocerySchema);
module.exports = Grocery;