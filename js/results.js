let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get('busqueda')


fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
.then(function(response){
    return response.json()
})
.then(function(data){
    let container_busqueda = document.querySelector('.container_busqueda')
    let art_busqueda = ''
    let titulo_busqueda = document.querySelector('#titulo_busqueda')
    if(data.products.length > 1){
        titulo_busqueda.innerText = `Resultados de la busqueda: ${busqueda}`
        for(let i = 0; i < data.products.length; i++){
            art_busqueda += `<article>
                                <img src='${data.products[i].images[0]}' alt=${data.products[i].title}>
                                <div>
                                    <h3>${data.products[i].title}</h3>
                                    <p> ${data.products[i].description}</p> 
                                    <a href="product.html"> <button>Ver detalle</button> </a>
                                </div>
                            </article>`
        }
        container_busqueda.innerHTML = art_busqueda
    }
    else{
        titulo_busqueda.innerText = `No hay resultados para el término: ${busqueda}`
    }
})
    
    .catch(function(error){
    console.log(error)
})







// Misma Api que en index y category.js


fetch('https://dummyjson.com/products/category-list')
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data)
		
		let suv = document.querySelector('#categoria_suv')
		suv.innerHTML = `<a href="category.html?categoryId=${data[6]}">Tecnología</a>`
		console.log(suv)
		let vehiculos = document.querySelector('#categoria_deportivos')
		vehiculos.innerHTML = `<a href="category.html?categoryId=${data[18]}">Vehículos</a>`
		console.log(vehiculos)
		let moto = document.querySelector('#categoria_motos')
		moto.innerHTML = `<a href="category.html?categoryId=${data[11]}">Motos</a>`
		console.log(moto)

	})
	.catch(function(error){
		console.log(error)})