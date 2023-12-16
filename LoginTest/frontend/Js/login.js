/* Elementos do html */

// Mesagem do analise
let pLG = document.getElementById("lg-msg")

// Login
let emailLG = document.getElementById("lg-email");
let senhaLG = document.getElementById("lg-password");

// Form
let formLG = document.getElementById("lg-form");

/* Funções */
formLG.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Submit login ativado")
});
