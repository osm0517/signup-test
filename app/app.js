"use strict";

//module
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

//routing
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true }));
app.use("/", home);//미들웨어 등록
app.use(express.static('./src/public'));

module.exports = app;