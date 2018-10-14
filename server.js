const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "client/build"));
}
// require("dotenv").config();

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/nytreact')

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
