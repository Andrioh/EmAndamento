let form = document.getElementById('form');
let mslogin = document.getElementById('ms-login');

if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let inputNome = document.getElementById('nm-user');
        let inputSenha = document.getElementById('sn-user');

        let Nome = inputNome.value
        let Senha = inputSenha.value;

        const Pesquisa = Contas.find(conta => conta.Nome === Nome && conta.Senha === Senha);

        if (Pesquisa) {
            console.log("Conta encontrada");
            mslogin.style.display = "block";
            mslogin.textContent = "Sucesso!";
            mslogin.style.color = "#00ff00";

        } else {
            console.log("Conta não encontrada");
            mslogin.style.display = "block";
            mslogin.textContent = "Conta não encontrada!";
            mslogin.style.color = "#ff0000";
}})};