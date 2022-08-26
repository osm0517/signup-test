"use strict";

const UserStorage = require("../../model/UserStorage.js");

const show = {
    home : (req, res) =>{
        res.render("home/home");
    },
    login : (req, res) =>{
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            pwd = req.body.pwd;
        console.log("front -> back" + id, pwd);
        const result = {};
        const users = UserStorage.getUsers("id", "pwd");
        console.log("UserStorage의 정보"+users);
        if(users.id.includes(id)){
            const value = users.id.indexOf(id);
            if(users.pwd[value] == pwd){
                result.success = true;
                return res.json(result);
            }
            result.success = false;
            result.msg = "로그인에 실패했습니다."
            return res.json(result);
        }
    },
};

module.exports = {
    show,
    process,
};