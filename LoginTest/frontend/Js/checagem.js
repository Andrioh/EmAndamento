// Verificação
logado = false
function verifica() {
    if (logado) {
        window.location.href = "../Html/index.html";
    }
}

setTimeout(verifica, 400);
setInterval(console.log(logado), 20)