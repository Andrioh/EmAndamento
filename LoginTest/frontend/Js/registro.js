/* Elementos do html */

// Mesagem do analise
let pRG = document.getElementById("rg-msg")

// Login
let emailRG = document.getElementById("rg-email");
let senhaRG = document.getElementById("rg-password");

// Form
let formRG = document.getElementById("rg-form");

/* Funções */
formRG.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("Submit registro ativado")
});
