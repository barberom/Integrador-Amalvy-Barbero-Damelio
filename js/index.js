//barra de busqueda
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