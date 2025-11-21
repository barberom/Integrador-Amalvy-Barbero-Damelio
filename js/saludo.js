let liSaludo = document.querySelector(".li-saludo");
let liLogout = document.querySelector(".li-logout");

let liLogin = document.querySelector('nav ul li:nth-child(4)');
let liRegister = document.querySelector('nav ul li:nth-child(5)');

let userName = localStorage.getItem("userName");

if (userName) {
    liSaludo.style.display = "block";
    liSaludo.innerHTML = `<a>Hola, ${userName} 👋</a>`;

    liLogout.style.display = "block";
    liLogout.innerHTML = `<a href="#" id="logout-btn">Log out</a>`;


    liLogin.style.display = "none";
    liRegister.style.display = "none";
}
