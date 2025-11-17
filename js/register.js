let formRegister = document.querySelector('.formRegister')
let mail_reg = document.querySelector('#mail_reg')
let pass_reg = document.querySelector('#pass_reg')
let repeat_reg = document.querySelector('#repeat_reg')

formRegister.addEventListener('submit',function(event){
    event.preventDefault()
    if(mail_reg.value == ''){
        alert('El mail no puede estar vacio.')
    }
    else if(pass_reg.value == '')
        alert('La contraseña no puede estar vacia.')
    else if((pass_reg.value).length < 6){
        alert('La contraseña debe tener al menos 6 caracteres.')
    }
    else if (pass_reg.value !== repeat_reg.value){
        alert('Las contraseñas no coinciden.')
    }
    else{
        this.submit()
    }
}) 