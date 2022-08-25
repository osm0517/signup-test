"use strict";

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    login_bt = document.querySelector('#login');

login_bt.addEventListener('click', () =>{
    const req = {
        id : id.value,
        pwd : pwd.value,
    }
    console.log(req);
    fetch('/login', {
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(req)
    });
});