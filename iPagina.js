

const  SALIDA = document.getElementById("SALIDA")
const SALDO = document.getElementById("SALDO")
const loggedUser= JSON.parse(localStorage.getItem ("result"))

  
 

 SALIDA.addEventListener("click", function(){
    let button= SALIDA.value
  console.log(SALIDA);
 window.location.href= "./index.html"

})

SALDO.addEventListener("click", function(){
    let button= SALDO.value

 window.location.href= "./saldo.html"
})
info.innerHTML = `<span> BIENVENIDO ${loggedUser.email}HOME BANK </span> `;