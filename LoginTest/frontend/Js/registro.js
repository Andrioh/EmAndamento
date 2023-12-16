/* Elementos do html */

// Mesagem do analise
let pRG = document.getElementById("rg-msg")

// Login
let emailRG = document.getElementById("rg-email");
let senhaRG = document.getElementById("rg-password");

// Form
let formRG = document.getElementById("rg-form");

/* Funções */
formRG.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = 'http://localhost:3000/api/user/';
    const formData = new FormData(this);

    fetch(`${url}${formData.get('Email')}/${formData.get('Password')}`, {
        method: 'POST',
    })
        .then(response => response.json())
        .then(data => console.log('Resposta do servidor:', data))
        .catch(error => console.error('Erro na requisição:', error));

    if (error) {
    } else {
        pLG.innerHTML = "Conta criada com sucesso!"
        pLG.style.display = "Flex"
        pLG.style.color = "green"
        setTimeout(function(){pLG.style.display = "none"},4000)
    }
});
