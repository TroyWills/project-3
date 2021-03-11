const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/grocerylist"
);


const grocerySeed = [
  {
    name: "Onion",
    price: 1.99,
    category: "produce",
    quantity: 10
  },
  {
    name: "Banana",
    price: 0.99,
    category: "produce",
    quantity: 10
  },
  {
    name: "Asparagus",
    price: 2.99,
    category: "produce",
    quantity: 10
  },
  {
    name: "Kale",
    price: 3.99,
    category: "produce",
    quantity: 10
  },
  {
    name: "Tomatoes",
    price: 1.50,
    category: "produce",
    quantity: 10
  },
  {
    name: "Milk",
    price: 2.99,
    category: "dairy",
    quantity: 10
  }

];

db.Grocery
  .remove({})
  .then(() => db.Grocery.collection.insertMany(grocerySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
