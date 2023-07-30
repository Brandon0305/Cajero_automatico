const num1input = document.getElementById("num-input");
const num2Input = document.getElementById("txt-input");
const sumar = document.getElementById("btn-sumar");
const restar = document.getElementById("btn-restar");
const buttonresult = document.getElementById("btn-result");
const result = document.getElementById("result"); // Agregar el elemento para mostrar el resultado

let saldo = 150;
let inputValue1 = "";

num1input.addEventListener("change", function () {
  inputValue1 = parseInt(num1input.value);
});

sumar.addEventListener("click", function () {
  let nuevosaldo = saldo + inputValue1;
  saldo = nuevosaldo;
  result.innerHTML += `<div> ${nuevosaldo} </div>`;
});

restar.addEventListener("click", function () {
  let nuevosaldo = saldo - inputValue1; // Se corrige el cálculo de la resta
  saldo = nuevosaldo;
  result.innerHTML += `<div> ${nuevosaldo} </div>`;
});