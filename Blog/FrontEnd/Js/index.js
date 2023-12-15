import { loginStatus, onLogin } from "./login.js";
let logado = loginStatus.sucesso;

let HelloCount = document.getElementById('text-count');
let NewPost = document.getElementById('nv-post');
let LoginCount = document.getElementById('lg-count');
let textcount = document.getElementById("text-count");

if (logado === false) {
    NewPost.style.display = "none";
    HelloCount.style.display = "none";
    LoginCount.style.display = "flex";
} else {
    LoginCount.style.display = "none";
    HelloCount.style.display = "flex";
    NewPost.style.display = "flex";
    textcount.textContent = `Olá, ${Nome}`;
}