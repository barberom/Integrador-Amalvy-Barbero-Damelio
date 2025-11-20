let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let categoriaId = queryStringObj.get('categoryId');


fetch(`https://dummyjson.com/products/category/${categoriaId}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
		let titulo = document.querySelector('#category_titulo')
		titulo.innerText = `${categoriaId}`
        let productos = document.querySelector('#productos')
		let categoria_productos = ''
		for(let i = 0; i < data.products.length; i++){
			categoria_productos += `<article>
											<img src='${data.products[i].images[0]}' alt=${data.products[i].title}>
											<div>
												<h3>${data.products[i].title}</h3>
												<p> ${data.products[i].description}</p> 
												<a href="product.html?id=${data.products[i].id}"> <button>Ver detalle</button> </a>
											</div>
										</article>`
		}
		productos.innerHTML = categoria_productos
	})

	.catch(function(error){
		console.log(error)
	})




	// Mismo fetch que en index


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