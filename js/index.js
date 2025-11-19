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

// api

fetch('https://dummyjson.com/products/category/motorcycle')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    let mas_vendidos = document.querySelector('#mas_vendidos')
    let productos_mas_vendidos = ''
    for(let i = 0; i < data.products.length; i++){
        productos_mas_vendidos += `<article>
                                        <img src='${data.products[i].images[0]}' alt=${data.products[i].title}>
                                        <div>
                                            <h3>${data.products[i].title}</h3>
                                            <p> ${data.products[i].description}</p> 
                                            <a href="product.html"> <button>Ver detalle</button> </a>
                                        </div>
                                    </article>`
    }
    mas_vendidos.innerHTML = productos_mas_vendidos
})
.catch(function(error){
    console.log(error)
})

fetch('https://dummyjson.com/products/category/vehicle')
.then(function(response){
    return response.json()
})
.then(function(data){
    let otros_productos = document.querySelector('#otros_productos')
    let varios = ''
    for(let i = 0; i < data.products.length; i++){
        varios += `<article>
                                        <img src='${data.products[i].images[1]}' alt=${data.products[i].title}>
                                        <div>
                                            <h3>${data.products[i].title}</h3>
                                            <p> ${data.products[i].description}</p> 
                                            <a href="product.html"> <button>Ver detalle</button> </a>
                                        </div>
                                    </article>`
    }
    otros_productos.innerHTML = varios
})
.catch(function(error){
    console.log(error)})


