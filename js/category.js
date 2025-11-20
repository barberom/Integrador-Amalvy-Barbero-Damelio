let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let categoriaId = queryStringObj.get('categoryId');


fetch(`'https://dummyjson.com/products/category/${categoriaId}'`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
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