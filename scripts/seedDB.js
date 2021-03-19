const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grocerylist");

const grocerySeed = [
  {
    name: "Onions",
    price: 1.99,
    description: "a pound of onions",
    category: "produce",
    quantity: 10,
    img: "https://i.imgur.com/jIskQjS.png",
    width: "90px",
  },
  {
    name: "Bananas",
    price: 0.99,
    description:"a pound of bananas",
    category: "produce",
    quantity: 10,
    img: "https://i.imgur.com/IjWFTNr.png",
    width: "100px",
  },
  {
    name: "Spinach",
    price: 2.99,
    description:"a pound of spinach",
    category: "produce",
    quantity: 10,
    img: "https://i.imgur.com/MWnnhcw.png",
    width: "110px",
  },
  {
    name: "Strawberries",
    price: 3.99,
    description:"a package of strawberries",
    category: "produce",
    quantity: 10,
    img: "https://i.imgur.com/2Ch2kfN.png",
    width: "90px",
  },
  {
    name: "Tomatoes",
    price: 1.5,
    description:"a pound of tomatoes",
    category: "produce",
    quantity: 10,
    img: "https://i.imgur.com/1xXpSGj.png",
    width: "100px",
  },
  {
    name: "Milk",
    price: 2.99,
    description:"a gallon of milk",
    category: "dairy",
    quantity: 10,
    img: "https://i.imgur.com/EjELFip.png",
  
  },
  {
    name: "Yogurt",
    price: 1.50,
    description:"6oz of yogurt",
    category: "dairy",
    quantity: 10,
    img: "https://i.imgur.com/NEwAAf4.png",
    width: "70px",
  },
  {
    name: "Cheese",
    price: 7.99,
    description:"a pound of cheese",
    category: "dairy",
    quantity: 10,
    img: "https://i.imgur.com/fYNEs6U.png",
    width: "80px",
  },
  {
    name: "Butter",
    price: 1.99,
    description:"a stick of butter",
    category: "dairy",
    quantity: 10,
    img: "https://i.imgur.com/cdtbZvt.png",
    width: "100px",
  },
  {
    name: "Ice Cream",
    price: 5.99,
    description:"48oz tub of ice cream",
    category: "dairy",
    quantity: 10,
    img: "https://i.imgur.com/n47KkAu.png",
    width: "60px",
  },
  {
    name: "Potato Chips",
    price: 2.50,
    description:"15oz bag of potato chips",
    category: "snacks",
    quantity: 10,
    img:
      "https://i.imgur.com/9OH2xxe.png",
    width: "100px",
  },
  {
    name: "Chocolate Chip Cookies",
    price: 1.99,
    description:"8oz package of cookies",
    category: "snacks",
    quantity: 10,
    img:
      "https://i.imgur.com/SM3eL6j.png",
    width: "100px",
  },
  {
    name: "PopCorn ",
    price: 2.99,
    description:"8oz package of popcorn",
    category: "snacks",
    quantity: 10,
    img:
      "https://i.imgur.com/EzOJAZB.png",
    width: "100px",
  },
  {
    name: "Chex Mix",
    price: 2.99,
    description:"4oz bag of chex mix",
    category: "snacks",
    quantity: 10,
    img:
      "https://i.imgur.com/72iGhXD.png",
    width: "100px",
  },
  {
    name: "Fruit Snacks",
    price: 2.99,
    description:"4oz package of fruit snacks",
    category: "snacks",
    quantity: 10,
    img:
      "https://i.imgur.com/XTZ3Srp.png",
    width: "100px",
  },
  {
    name: "Water",
    price: 1.50,
    description:"16oz bottle of water",
    category: "drinks",
    quantity: 10,
    img:
      "https://i.imgur.com/Te8WvDZ.png",
    width: "",
  },
  {
    name: "Pepsi",
    price: 0.99,
    description:"12oz bottle of pepsi",
    category: "drinks",
    quantity: 10,
    img:
      "https://i.imgur.com/uNETQei.png",
    // width: "80px",
  },
  {
    name: "Red Bull",
    price: 3.99,
    description:"12oz can of red bull",
    category: "drinks",
    quantity: 10,
    img:
      "https://i.imgur.com/0KON4HM.png",
    width: "100px",
  },
  {
    name: "Sprite",
    price: 0.99,
    description:"12oz bottle of sprite",
    category: "drinks",
    quantity: 10,
    img:
      "https://i.imgur.com/sMdyVQY.png",
    width: "100px",
  },
  {
    name: "Orange Juice",
    price: 1.99,
    description:"1 gal. carton of orange juice",
    category: "drinks",
    quantity: 10,
    img:
      "https://i.imgur.com/gvGsfyc.png",
    width: "100px",
  },
  {
    name: "Toilet Paper",
    price: 10.99,
    description:"12 rolls of toilet paper",
    category: "personal",
    quantity: 10,
    img:
      "https://i.imgur.com/Dch7P3T.png",
    width: "100px",
  },
  {
    name: "Deodorant",
    price: 4.99,
    description:"a stick of deodorant",
    category: "personal",
    quantity: 10,
    img:
      "https://i.imgur.com/qqGdCNm.png",
    width: "100px",
  },
  {
    name: "Toothpaste",
    price: 2.99,
    description:"6oz package of toothpaste",
    category: "personal",
    quantity: 10,
    img:
      "https://i.imgur.com/WwobrKU.png",
    width: "100px",
  },
  {
    name: "Shampoo",
    price: 2.99,
    description:"24oz bottle of shampoo",
    category: "personal",
    quantity: 10,
    img:"https://i.imgur.com/1GmDloc.png",
    width: "100px",
  },
  {
    name: "Tooth Brush",
    price: 2.99,
    description:"7 pack toothbrush",
    category: "personal",
    quantity: 10,
    img:
      "https://i.imgur.com/gTqWQej.png",
    width: "",
  },
];

db.Grocery.remove({})
  .then(() => db.Grocery.collection.insertMany(grocerySeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });