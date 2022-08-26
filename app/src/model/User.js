"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const response = {};
        const {id, pwd} = UserStorage.getUserInfo(this.body.id);
        if(id){
            if(id === this.body.id && pwd === this.body.pwd){
                response.success = true;
                response.msg = "로그인에 성공";
                return(response);
            }
            response.success = false;
            response.msg = "비밀번호가 틀렸습니다";
            return(response);
        }
        response.success = false;
        response.msg = "아이디가 틀렸습니다";
        return(response);
    }
}

module.exports = User;