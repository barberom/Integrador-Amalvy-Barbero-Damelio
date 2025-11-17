let formRegister = document.querySelector('.formRegister')
let mail_reg = document.querySelector('#mail_reg')
let pass_reg = document.querySelector('#pass_reg')
let repeat_reg = document.querySelector('#repeat_reg')

// Errores

let mailError = document.querySelector('.invalid_mail')
let passError = document.querySelector('.invalid_pass')
let repeatError = document.querySelector('.invalid_repeat')

formRegister.addEventListener('submit',function(event){
    event.preventDefault()
    if(mail_reg.value == ''){
        mailError.innerHTML = "<p>El mail no puede quedar vacío.</p>"
    }
    else if(pass_reg.value == '')
        passError.innerHTML = "<p>La contraseña no puede estar vacía.</p>"
    else if((pass_reg.value).length < 6){
        repeatError.innerHTML = "<p>La contraseña debe tener al menos 6 caracteres.</p>"
    }
    else if (pass_reg.value !== repeat_reg.value){
        repeatError.innerHTML = "<p>Las contraseñas no coinciden.</p>"
    }
    else{
        this.submit()
    }
}) 