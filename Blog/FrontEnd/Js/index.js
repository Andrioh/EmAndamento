let logado = false;

let HelloCount = document.getElementById('text-count');
let NewPost = document.getElementById('nv-post');
let LoginCount = document.getElementById('lg-count');

if (logado === false) {
    NewPost.style.display = "none";
    HelloCount.style.display = "none";
    LoginCount.style.display = "flex";
} else {
    LoginCount.style.display = "none";
    HelloCount.style.display = "flex";
    NewPost.style.display = "flex";
    HelloCount.textContent = `Olá, ${null}`;
}