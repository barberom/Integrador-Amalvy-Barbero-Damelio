
let usuario = localStorage.getItem("usuario");

let nav = document.querySelector("nav ul");

let liLogin = document.querySelector('nav ul li:nth-child(4)');
let liRegistro = document.querySelector('nav ul li:nth-child(5)');

if (usuario) {

    let liBienvenido = document.createElement("li");
    liBienvenido.innerHTML = `<a>Bienvenido: ${usuario}</a>`;

    let liLogout = document.createElement("li");
    liLogout.innerHTML = `<a href="#" id="logout-btn">Logout</a>`;
    nav.appendChild(liBienvenido);
    nav.appendChild(liLogout);

    liLogin.style.display = "none";
    liRegistro.style.display = "none";

    liLogout.addEventListener("click", function(e){
        e.preventDefault();
        localStorage.clear();
        location.reload();
    });
}

