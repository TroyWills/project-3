const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
// const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(morgan('dev'))
// Define middleware here
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/grocerylist", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}, console.log('db connected...'));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

