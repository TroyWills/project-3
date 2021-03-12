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
    quantity: 10,
    img:"http://clipart-library.com/image_gallery2/Onion-PNG-File.png"
  },
  {
    name: "Banana",
    price: 0.99,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/image_gallery2/Banana.png"
  },
  {
    name: "Asparagus",
    price: 2.99,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/newhp/bunch-of-asparagus-sutcliffe-farms-vegetarian-cuisine-asparagus.jpg"
  },
  {
    name: "Strawberry",
    price: 3.99,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/image_gallery2/Strawberry-Download-PNG.png"
  },
  {
    name: "Tomatoes",
    price: 1.50,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/images_k/tomato-transparent/tomato-transparent-3.jpg"
  },
  {
    name: "Milk",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "http://clipart-library.com/images_k/milk-clipart-transparent/milk-clipart-transparent-17.jpg"

  },
  {
    name: "Yogurt",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "http://clipart-library.com/data_images/472474.png"
  },
  {
    name: "Cheese",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "http://clipart-library.com/new_gallery/124-1240630_block-of-butter-png-cheddar-cheese-block-png.png"
  },
  {
    name: "Butter",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AxQnXMDg9na5lu8l6jUHWCV-4cp07N7uTvKceLnw5fhTNzY&s"
  },
  {
    name: "Ice Cream",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-17hIlqRR8Dda-lSGaV4rWQxZdXu0Vr2n3wJzr4KP5Ghk_nS7&s"
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
