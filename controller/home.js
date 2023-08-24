const infodiv = document.getElementById("User-name");
const balance = document.getElementById("User-balance");
const num1input = document.getElementById("num-input");
const sumar = document.getElementById("btn-sumar");
const restar = document.getElementById("btn-restar");
const result = document.getElementById("result"); 

const loggeduser = JSON.parse(localStorage.getItem("loggeduser"));

infodiv.innerHTML = `<h3>Bienvenido(a) ${loggeduser.Email}</h3>`;
balance.innerHTML = `<h5>Tu saldo: ${loggeduser.balance}</h5>`;



let saldo = loggeduser.balance;
let inputValue1 = 0;

num1input.addEventListener("change", function () {
  inputValue1 = parseFloat(num1input.value);
  
  
});

sumar.addEventListener("click", function () {
  saldo += inputValue1;
  balance.innerHTML = `<h5>Tu saldo: ${saldo}</h5>`;
});

restar.addEventListener("click", function () {
  saldo -= inputValue1;
  balance.innerHTML = `<h5>Tu saldo: ${saldo}</h5>`;
});

btnlogout.addEventListener("click", function () {
  window.location.href = "./index.html";
});

