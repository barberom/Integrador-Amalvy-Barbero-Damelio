let usuario = localStorage.getItem("usuario")
let liLogin = document.querySelector(".li-login")
let liRegister = document.querySelector(".li-register")
let saludo = document.querySelector(".saludo")
let liLogout = document.querySelector(".li-logout")
let linkLogout = document.querySelector('.link-logout')
let nav = document.querySelector('.nav')

if (usuario !== null) {
    saludo.innerHTML = `Bienvenido <span>${usuario}</span>`
    saludo.style.display = "block"
    liLogout.style.display = "block"
    liLogin.style.display = "none"
    liRegister.style.display = "none"
    nav.style.maxWidth = "150px"
    linkLogout.style.width = "60px"
}
