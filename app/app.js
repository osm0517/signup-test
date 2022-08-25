"use strict";

//module
const express = require('express');
const app = express();


//routing
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);//미들웨어 등록
app.use(express.static('./src/public'));

module.exports = app;