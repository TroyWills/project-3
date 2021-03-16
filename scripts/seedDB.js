const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grocerylist");

const grocerySeed = [
  {
    name: "Onion",
    price: 1.99,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/image_gallery2/Onion-PNG-File.png",
    width: "90px",
  },
  {
    name: "Banana",
    price: 0.99,
    category: "produce",
    quantity: 10,
    img: "http://clipart-library.com/image_gallery2/Banana.png",
    width: "100px",
  },
  {
    name: "Asparagus",
    price: 2.99,
    category: "produce",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6o2M70XpeggT0lpDA-ZVFCdFL9RZeU2TbSUfiSSCCtRzJAgk&s",
    width: "110px",
  },
  {
    name: "Strawberry",
    price: 3.99,
    category: "produce",
    quantity: 10,
    img:
      "http://clipart-library.com/image_gallery2/Strawberry-Download-PNG.png",
    width: "90px",
  },
  {
    name: "Tomatoes",
    price: 1.5,
    category: "produce",
    quantity: 10,
    img:
      "http://clipart-library.com/images_k/tomato-transparent/tomato-transparent-3.jpg",
    width: "100px",
  },
  {
    name: "Milk",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img:
      "http://clipart-library.com/images_k/milk-clipart-transparent/milk-clipart-transparent-17.jpg",
    width: "70px",
  },
  {
    name: "Yogurt",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img: "http://clipart-library.com/data_images/472474.png",
    width: "70px",
  },
  {
    name: "Cheese",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img:
      "http://clipart-library.com/new_gallery/124-1240630_block-of-butter-png-cheddar-cheese-block-png.png",
    width: "80px",
  },
  {
    name: "Butter",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AxQnXMDg9na5lu8l6jUHWCV-4cp07N7uTvKceLnw5fhTNzY&s",
    width: "100px",
  },
  {
    name: "Ice Cream",
    price: 2.99,
    category: "dairy",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-17hIlqRR8Dda-lSGaV4rWQxZdXu0Vr2n3wJzr4KP5Ghk_nS7&s",
    width: "60px",
  },
  {
    name: "Potato Chips",
    price: 2.5,
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0DfrWe8zpQCl6bgsgn-y2d1cjUQjvwT73nTesFByvERhv28&s",
    width: "100px",
  },
  {
    name: "Chocolate Chip Cookies",
    price: 1.99,
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAIaJGaTCn7FEW2zsHT5EAkt5ZZyuQviNAaOVjEY-EJMsQW0&s",
    width: "100px",
  },
  {
    name: "PopCorn ",
    price: 2.99,
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz70fpfrAOhHs5_jSJxftxJOPjnhASejJc56HXQoJQvi6mEx3W&s",
    width: "100px",
  },
  {
    name: "Chex Mix",
    price: 2.99,
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS9JYO0xkcKDH5Ny_fbSXPRynWZdohRtgPkCLuTVT0xuJSnnt&s",
    width: "100px",
  },
  {
    name: "Fruit Snack",
    price: 2.99,
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJVdtYIShOwCzj9KyPja-xQrBqWqMp801kx00CpT9u1PKp_n6&s",
    width: "100px",
  },
  {
    name: "Water",
    price: 2.99,
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-aSJfC7v9OiP8jSeYgb4ymND9GwPuLvbg9OHAPmQTBeBhcRK&s",
    width: "100px",
  },
  {
    name: "Pepsi",
    price: 2.99,
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueRHhUHbaVXge8ZOyXaa7yoSampgTQdLGSuAMZTJl9apq84Bt&s",
    width: "100px",
  },
  {
    name: "Red Bull",
    price: 2.99,
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMnKOqsqQ1iFllGdOA83jbx2132cVlyJGUEjcSzuniCPIKA7U&s",
    width: "100px",
  },
  {
    name: "Sprite",
    price: 2.99,
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7TjMpWHa8Islj6rG8aJHHIpInDQpT-emReSMZw977LeQnUd2&s",
    width: "100px",
  },
  {
    name: "Orange Juice",
    price: 2.99,
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtMR49nixhIVgNVKpggT7K5aClT6h9swba2GaOLgebCZNaqA&s",
    width: "100px",
  },
  {
    name: "Toilet Paper",
    price: 2.99,
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFiCvOKgXJr8IrP8TIu-ASTs4qeGNeeTFw3S28l4KsoQzhpY&s",
    width: "100px",
  },
  {
    name: "Deodorant",
    price: 2.99,
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_CS5tAe-FvuI77NEv0mImbtXUD68jd14SgO3g27WcifTi44&s",
    width: "100px",
  },
  {
    name: "Toothpaste",
    price: 2.99,
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60gfGvzUf6z4zRMZ_qd7ficTR8gREq_aecNxZFN1_TmAuLbo&s",
    width: "100px",
  },
  {
    name: "Body Wash",
    price: 2.99,
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshC_PDzbnlfoNN0bLq3gfUmHPn28yoHr_OI46kt2WpBymXcUQ&s",
    width: "100px",
  },
  {
    name: "Tooth Brush",
    price: 2.99,
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjhxPUBuQV25U6ezDYhkmtdHx0FUCNU2W-lvkz0_dlpbEwvCc&s",
    width: "100px",
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