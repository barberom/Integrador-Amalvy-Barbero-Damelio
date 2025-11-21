let usuario = localStorage.getItem("usuario");
let liLogin = document.querySelector("#li-login");
let liRegister = document.querySelector("#li-register");
let liSaludo = document.querySelector("#li-saludo");
let liLogout = document.querySelector("#li-logout");

if (usuario !== null) {
    liSaludo.innerText = "Bienvenido " + usuario;
    liSaludo.style.display = "block";
    liLogout.style.display = "block";
    liLogin.style.display = "none";
    liRegister.style.display = "none";

    document.querySelector("#logout").addEventListener("click", function(){
        localStorage.removeItem("usuario");
    });
}
