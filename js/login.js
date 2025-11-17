let formLogin = document.querySelector('.formLogin')
let mail_log = document.querySelector('#mail_log')
let pass_log = document.querySelector('#pass_log')

// Errores

let mailError = document.querySelector('.invalid_mail')
let passError = document.querySelector('.invalid_pass')
let repeatError = document.querySelector('.invalid_repeat')

formLogin.addEventListener('submit',function(event){
    event.preventDefault()
    if(mail_log.value == ''){
        mailError.innerHTML = "<p>El mail no puede quedar vacío.</p>"
    }
    else if(pass_log.value == ''){
        passError.innerHTML = "<p>La contraseña no puede estar vacía.</p>"
    }
    else if((pass_log.value).length < 6){
        repeatError.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres.</p>"
    }
    else{
        this.submit()
        localStorage.clear()
        localStorage.setItem(usuario, mail_log.value) // no se si funciona
        localStorage.setItem(password, pass_log.value)
        console.log(localStorage)
    }
}) 