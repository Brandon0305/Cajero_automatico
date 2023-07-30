const btnLogin = document.getElementById("btn-Login");
const emailInput = document.getElementById("email-input")
const PasswordInput = document.getElementById("Pass-input")

const  user = [
 {
    email: "Mali",
    Password : "1234",
    balance : 200,
 },
 {email: "Gera",
 Password : "4567",
 balance : 290, 
},
 {email: "Maui",
 Password : "7890",
 balance : 67,
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
