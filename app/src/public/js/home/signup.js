"use strict";

const signupButton = document.getElementById('signup_button');
let id = document.getElementById('id');
let pwd = document.getElementById('pwd');
let confirmpwd = document.getElementById('name');
let mail_value = document.getElementById('e-mail');
let phone_value = document.getElementById('phone');
/**
 * req에 값 추가해야되고 나머지도 정리해야 됨
 */
signupButton.addEventListener('click', () =>{
    console.log(11);
    const req = {
        id : id.value,
        pwd : pwd.value,
        confirmpwd : confirmpwd.value,
    }
    
    fetch('/signup', {
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/login";
            console.log(res);
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(err)});
});