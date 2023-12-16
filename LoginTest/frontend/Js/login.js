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
    const url = 'http://localhost:3000/api/usersearch/';
    const formData = new FormData(this);

    fetch(`${url}${formData.get('Email')}/${formData.get('Password')}`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => console.log('Resposta do servidor:', data))
        .catch(error => console.error('Erro na requisição:', error));
});
