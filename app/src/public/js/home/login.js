"use strict";

const id = document.querySelector('#id'),
    pwd = document.querySelector('#pwd'),
    login_bt = document.querySelector('#login');

login_bt.addEventListener('click', () =>{
    const req = {
        id : id.value,
        pwd : pwd.value,
    }
    
    fetch('/login', {
        method : 'POST',
        headers :{
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(req)
    }).then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = "/";
            console.log(res);
        }else{
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(err)});
});