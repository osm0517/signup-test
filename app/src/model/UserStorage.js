"use strict";

//파일로 구성된 데이터 저장소 및 모델
class UserStorage{
    //바로 접근하면 보안상 취약해질 수 있음
    //이름 앞에 #을 붙이면 은닉할 수 있음
    static #users = {
        id : ["sungmin", "aaa", "ddd"],
        pwd : ["123", "1234", "12345"]
    }
    /**
     * users에 바로 접근하면 안되기에 접근하는 메서드
     */
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}

module.exports = UserStorage;