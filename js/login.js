let formLogin = document.querySelector('.formLogin')
let mail_log = document.querySelector('#mail_log')
let pass_log = document.querySelector('#pass_log')

formLogin.addEventListener('submit',function(event){
    event.preventDefault()
    if(mail_log.value == ''){
        alert('el mail no puede estar vacio')
    }
    else if(pass_log.value == '')
        alert('la contraseña no puede estar vacia')
    else if((pass_log.value).length < 6){
        alert('La contraseña debe tener al menos 6 caracteres')
    }
    else{
        this.submit()
        localStorage.clear()
        localStorage.setItem(usuario, mail_log.value) // no se si funciona
        localStorage.setItem(password, pass_log.value)
        console.log(localStorage)
    }
}) 