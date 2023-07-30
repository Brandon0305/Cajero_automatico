const btnLogin = document.getElementById("btn-Login");
const emailInput = document.getElementById("email-input")
const PasswordInput = document.getElementById("Pass-input")

const  user = [
 {
    email: "tron",
    Password : "1234",
    balance : 150,
 },
 {email: "brandon",
 Password : "4567",
 balance : 150, 
},
 {email: "protalento",
 Password : "7890",
 balance : 150,
}
]

btnLogin.addEventListener("click", function(event){
    event.preventDefault()
    let email= emailInput.value
    let Password = PasswordInput.value

    let loggedUser = user.find(user => user.email === email && user.Password === Password)
    if(loggedUser){
        localStorage.setItem("nuevo ", JSON.stringify(loggedUser))
      window.location.href= "./ipagina.html"    
    }
    else(
        alert ( "el usuario o la cotraseña es incorrecto")
    )
    
  

})
