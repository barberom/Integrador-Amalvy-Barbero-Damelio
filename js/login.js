let formLogin = document.querySelector('.formLogin')
let mail_log = document.querySelector('#mail_log')
let pass_log = document.querySelector('#pass_log')

// Errores

let mailError = document.querySelector('.invalid_mail')
let passError = document.querySelector('.invalid_pass')

formLogin.addEventListener('submit',function(event){
    event.preventDefault()
    mailError.innerHTML = ""
    passError.innerHTML = ""

    if(mail_log.value == ''){
        mailError.innerHTML = "<p>El mail no puede quedar vacío.</p>"
    }
    else if(pass_log.value == ''){
        passError.innerHTML = "<p>La contraseña no puede estar vacía.</p>"
        mailError.style.display = 'none'
    }
    else if((pass_log.value).length < 6){
        passError.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres.</p>"
    }
    else{
        this.submit()
        
        localStorage.setItem("usuario", mail_log.value)
        localStorage.setItem("password", pass_log.value)
        this.submit()
        console.log(localStorage)
    }
}) 





// Barra de busqueda limitada 



let formBusqueda = document.querySelector('.barra_busqueda')
let busqueda = document.querySelector('#buscar_input')

formBusqueda.addEventListener('submit',function(event){
    event.preventDefault()
    if (busqueda.value == ''){
        alert("La busqueda no puede estar vacia")
    }
    else if ((busqueda.value).length < 3){
        alert('La busqueda debe ser mayor a 3 caracteres')
    }
    else{
        this.submit()
    }
})