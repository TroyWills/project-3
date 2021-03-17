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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQtiqsj3_QQ1MxTRQ7jqLg2AqySal_ywFgmruxkElB15_UP-W&s",
    width: "90px",
  },
  {
    name: "Bananas",
    price: 0.99,
    description:"a pound of bananas",
    category: "produce",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvGoVgPy-LinCzcrL1VnT3nIUIz2Yw3VuHP0YoHnnpUqhmwP0&s",
    width: "100px",
  },
  {
    name: "Asparagus",
    price: 2.99,
    description:"a pound of asparagus",
    category: "produce",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XJBVNirjstwiuVdTLXVBJUow7viJd_wBsgjUYu3Lfo6Nbms&s",
    width: "110px",
  },
  {
    name: "Strawberries",
    price: 3.99,
    description:"a package of strawberries",
    category: "produce",
    quantity: 10,
    img: "https://media.istockphoto.com/photos/strawberries-picture-id174262076?k=6&m=174262076&s=612x612&w=0&h=p16FtlZj_ZN3erHL__A_UA8bDrq28GG9udj5lr4xiDc=",
    width: "90px",
  },
  {
    name: "Tomatoes",
    price: 1.5,
    description:"a pound of tomatoes",
    category: "produce",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4Q94pUs0abcGuNV6euUHJQRL3Vj0msp0-eCjHsdr8Zp1G5I&s",
    width: "100px",
  },
  {
    name: "Milk",
    price: 2.99,
    description:"a gallon of milk",
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThq00_JkSIRtN_Aa7pEwplx1w8gaZpw_5prmss4UprfE2qAlE&s",
  
  },
  {
    name: "Yogurt",
    price: 1.50,
    description:"",
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ03skB9xzedXVGjh-EkM8KOnsRKwGx3TVPiynNkbIdqJzRnQ8&s",
    width: "70px",
  },
  {
    name: "Cheese",
    price: 7.99,
    description:"a pound of cheese",
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYojVpgKY5AubxohRD6FdguhWMVVxXm12XvBtaVPjJSb796yij&s",
    width: "80px",
  },
  {
    name: "Butter",
    price: 1.99,
    description:"a stick of butter",
    category: "dairy",
    quantity: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61_wBFP_2-dW-asYEViq0eRjDDpVpon6aUVBqiXNpIIfvupY&s",
    width: "100px",
  },
  {
    name: "Strawberry Ice Cream",
    price: 5.99,
    description:"48oz tub of ice cream",
    category: "dairy",
    quantity: 10,
    img: "https://media.istockphoto.com/vectors/icecream-inside-the-disposable-cup-vector-id512476873?k=6&m=512476873&s=612x612&w=0&h=rjs_NsSA8d6IH3D2unZsPcpSKuzJl6mEOCm_DHUVMlI=",
    width: "60px",
  },
  {
    name: "Potato Chips",
    price: 2.50,
    description:"8oz bag of potato chips",
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0DfrWe8zpQCl6bgsgn-y2d1cjUQjvwT73nTesFByvERhv28&s",
    width: "100px",
  },
  {
    name: "Chocolate Chip Cookies",
    price: 1.99,
    description:"a 3 pack bag",
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk_A48eob5fwRsW4gx6jOQevrBiHAgcPYDhTOYyQh9He3zv9jA&s",
    width: "100px",
  },
  {
    name: "PopCorn ",
    price: 2.99,
    description:"8oz package of popcorn",
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz70fpfrAOhHs5_jSJxftxJOPjnhASejJc56HXQoJQvi6mEx3W&s",
    width: "100px",
  },
  {
    name: "Chex Mix",
    price: 2.99,
    description:"4oz bag of chex mix",
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrS9JYO0xkcKDH5Ny_fbSXPRynWZdohRtgPkCLuTVT0xuJSnnt&s",
    width: "100px",
  },
  {
    name: "Fruit Snacks",
    price: 2.99,
    description:"4oz package of fruit snacks",
    category: "snacks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJVdtYIShOwCzj9KyPja-xQrBqWqMp801kx00CpT9u1PKp_n6&s",
    width: "100px",
  },
  {
    name: "Water",
    price: 1.50,
    description:"16oz bottle of water",
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-aSJfC7v9OiP8jSeYgb4ymND9GwPuLvbg9OHAPmQTBeBhcRK&s",
    width: "100px",
  },
  {
    name: "Pepsi",
    price: 0.99,
    description:"12oz can of pepsi",
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSueRHhUHbaVXge8ZOyXaa7yoSampgTQdLGSuAMZTJl9apq84Bt&s",
    width: "100px",
  },
  {
    name: "Red Bull",
    price: 3.99,
    description:"12oz can of red bull",
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMnKOqsqQ1iFllGdOA83jbx2132cVlyJGUEjcSzuniCPIKA7U&s",
    width: "100px",
  },
  {
    name: "Sprite",
    price: 0.99,
    description:"12oz can of sprite",
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw7TjMpWHa8Islj6rG8aJHHIpInDQpT-emReSMZw977LeQnUd2&s",
    width: "100px",
  },
  {
    name: "Orange Juice",
    price: 1.99,
    description:"12oz bottle of orange juice",
    category: "drinks",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtMR49nixhIVgNVKpggT7K5aClT6h9swba2GaOLgebCZNaqA&s",
    width: "100px",
  },
  {
    name: "Toilet Paper",
    price: 3.99,
    description:"6 rolls of toilet paper",
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTFiCvOKgXJr8IrP8TIu-ASTs4qeGNeeTFw3S28l4KsoQzhpY&s",
    width: "100px",
  },
  {
    name: "Deodorant",
    price: 4.99,
    description:"a stick of deodorant",
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_CS5tAe-FvuI77NEv0mImbtXUD68jd14SgO3g27WcifTi44&s",
    width: "100px",
  },
  {
    name: "Toothpaste",
    price: 2.99,
    description:"6oz package of toothpaste",
    category: "personal",
    quantity: 10,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60gfGvzUf6z4zRMZ_qd7ficTR8gREq_aecNxZFN1_TmAuLbo&s",
    width: "100px",
  },
  {
    name: "Shampoo",
    price: 2.99,
    description:"",
    category: "personal",
    quantity: 10,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUBNco8zn2ntWuZ6c4ezc8UetNjpIpbIL3A&usqp=CAU",
    width: "100px",
  },
  {
    name: "Tooth Brush",
    price: 2.99,
    description:"",
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