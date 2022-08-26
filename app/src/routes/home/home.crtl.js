"use strict";

const User = require("../../model/User");

const show = {
    home : (req, res) =>{
        res.render("home/home");
    },
    login : (req, res) =>{
        res.render("home/login");
    },
    signup : (req, res) =>{
        res.render("home/signup");
    },
};

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
    signup : (req, res) => {
        const user = new User(req.body);
        const response = user.signup();
        return res.json(response);
    },
};

module.exports = {
    show,
    process,
};