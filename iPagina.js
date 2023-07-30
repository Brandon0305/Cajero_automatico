

const  SALIDA = document.getElementById("SALIDA")
const SALDO = document.getElementById("SALDO")
//const loggedUser= JSON.parse(localStorage.getItem ("result"))
console.log(SALIDA)
  
 //info.innerHTML = `<span> BIENVENIDO ${loggedUser.email}HOME BANCK </span> `;

 SALIDA.addEventListener("click", function(){
    let button= SALIDA.value

 window.location.href= "./index.html"

})

SALDO.addEventListener("click", function(){
    let button= SALDO.value

 window.location.href= "./saldo.html"
})