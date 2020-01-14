const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect("mongodb://localhost:27017/nodeapi", { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get("/", (req, res) => {
    Product.create({
        title: "Curso Nodejs",
        description: "Projeto do curso nodejs rocketseat",
        url: "http://gfnasc.com/"
    });
    return res.send("Hello gui");
});

app.listen(3001);