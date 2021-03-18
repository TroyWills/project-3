const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grocerySchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    img: { type: String, required: true },
    width: { type: String, required: false }

});

const Grocery = mongoose.model("Grocery", grocerySchema);
module.exports = Grocery;