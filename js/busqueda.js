//let formBusqueda = document.querySelector('.barra_busqueda')
let busqueda2 = document.querySelector('#buscar_input').value

formBusqueda.addEventListener('submit',function(event){
    event.preventDefault()
    fetch(`https://dummyjson.com/products/search?q=${busqueda2}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let container_busqueda = document.querySelector('.container_busqueda')
        let art_busqueda = ''
        let titulo_busqueda = document.querySelector('#titulo_busqueda')
        titulo_busqueda.innerText = `Resultados de la busqueda: ${busqueda2}`
        for(let i = 0; i < data.products.length; i++){
            art_busqueda += `<article>
                                <img src='${data.products[i].images[1]}' alt=${data.products[i].title}>
                                <div>
                                    <h3>${data.products[i].title}</h3>
                                    <p> ${data.products[i].description}</p> 
                                    <a href="product.html"> <button>Ver detalle</button> </a>
                                </div>
                            </article>`
        }
        container_busqueda.innerHTML = art_busqueda
    })
    
    .catch(function(error){
    console.log(error)
})
})
