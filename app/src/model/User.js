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

    signup(){
        const body = this.body;
        const response = {};
        const {id} = UserStorage.getUserInfo(body.id);
        if(!body.id) {
            response.msg = "아이디를 입력해주세요";
            response.success = false;
            return(response);
        }
        else if(!body.pwd || !body.confirmpwd) {
            response.msg = "비밀번호를 입력해주세요.";
            response.success = false;
            return(response);
        }
        else if(body.pwd !== body.confirmpwd) {
            response.msg = "비밀번호가 일치하지 않습니다.";
            response.success = false;
            return(response);
        }
        else if(id) {
            response.msg = "동일한 계정이 존재합니다.";
            response.success = false;
            return(response);
        };
        response.msg = "회원가입에 성공했습니다.";
        response.success = true;
        return(response);
    }
}

module.exports = User;