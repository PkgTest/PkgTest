/*
This script manages login process.
*/

function validateLogin(){
    let email=document.getElementById("email").nodeValue;
    let password=document.getElementById("password").nodeValue;
}

function Pwd_display(){
    let elType = document.getElementById("password").type;
    if (elType === "password"){
        document.getElementById("show_pwd").style.backgroundImage = "url(img/uncrossedeye.png)";
        document.getElementById("password").type = "text";
    } else {
        document.getElementById("show_pwd").style.backgroundImage = "url(img/crossedeye.png)";
        document.getElementById("password").type = "password";
    }
}