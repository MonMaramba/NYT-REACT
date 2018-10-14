const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGO_URI || "mongodb://localhost/nytreact",
    {
        useMongoClient: false
    }
);

const articleSeed = [
    {
        title: "one",
        url: "url1",
        date: new Date(Date.now())
    },
    {
        title: "two",
        url: "url2",
        date: new Date(Date.now())
    }
];

db.Article
    .remove({})
    .then(() => {
        console.log(data.insertedIds.lenght + " records inserted!");
        process.exit(0);
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    });