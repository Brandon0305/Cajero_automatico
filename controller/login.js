const btnlogin = document.getElementById("btn-login")
const Emailimput = document.getElementById("Email-imput")
const passimput = document.getElementById("pass-imput")
const user = [
 {
    Email : "Mali",
    pasword : "1234",
    balance : 200,
},  
{
    Email : "gera",
    pasword : "1234",
    balance : 290,
},
{
    Email : "maui",
    pasword : "1234",
    balance : 67,
} ,
]

btnlogin.addEventListener("click", function
(event){
 event.preventDefault();  
let Email= Emailimput.value
let pasword= passimput.value

let loggeduser = user.find ( user => user.Email === Email && user.pasword === pasword)
if(loggeduser){

    localStorage.setItem("loggeduser",JSON.stringify (loggeduser))
window.location.href= "./home.html"
}
else{
    alert ("el usuario es incorrecto")
}

});
