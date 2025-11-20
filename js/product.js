let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let idVehiculo = queryStringObj.get('id');


fetch(`https://dummyjson.com/products/${idVehiculo}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
        let nombre = document.querySelector('#product_nombre');
        nombre.innerText = data.title

        let imagen = document.querySelector('.imagen');
        imagen.src = data.images[0]

        let marca_foto = document.querySelector('#product_marca_foto');
        marca_foto.src = data.images[3]

        let categoria_foto = document.querySelector('#product_categoria_foto');
        categoria_foto.src = data.images[2]

        let categoria = document.querySelector('#product_categoria');
        categoria.innerHTML = `<a href="product.html?category=${data.category}">${data.category}</a>`

        let tags = document.querySelector('#product_tags');
        tags.innerText = data.tags

        let descripcion = document.querySelector('#product_descripcion');
        descripcion.innerText = data.description

        let marca = document.querySelector('#product_marca');
        marca.innerText = data.brand

        let precio = document.querySelector('#product_precio');
        precio.innerText = "$" + data.price


        let reseña1 = document.querySelector('#product_reseña1');
        reseña1.innerText = "👤 "+ data.reviews[0].reviewerName
        let reseña2 = document.querySelector('#product_reseña2');
        reseña2.innerText = "👤 "+ data.reviews[1].reviewerName
        let reseña3 = document.querySelector('#product_reseña3');
        reseña3.innerText = "👤 "+ data.reviews[2].reviewerName

        let reseñaDia1 = document.querySelector('#product_dia1');
        reseñaDia1.innerText = data.reviews[0].date
        let reseñaDia2 = document.querySelector('#product_dia2');
        reseñaDia2.innerText = data.reviews[1].date
        let reseñaDia3 = document.querySelector('#product_dia3');
        reseñaDia3.innerText = data.reviews[2].date

        let comentarios1 = document.querySelector('#product_comentarios1');
        comentarios1.innerText = data.reviews[0].comment
        let comentarios2 = document.querySelector('#product_comentarios2');
        comentarios2.innerText = data.reviews[1].comment
        let comentarios3 = document.querySelector('#product_comentarios3');
        comentarios3.innerText = data.reviews[2].comment

        let rating1 = document.querySelector('#product_rating1');
        rating1.innerText = "Rating: " + data.reviews[0].rating + " ⭐️"
        let rating2 = document.querySelector('#product_rating2');
        rating2.innerText = "Rating: " + data.reviews[1].rating + " ⭐️"
        let rating3 = document.querySelector('#product_rating3');
        rating3.innerText = "Rating: " + data.reviews[2].rating + " ⭐️"

        let stock = document.querySelector('#product_stock');
        stock.innerText = "Stock Disponible: " + data.stock

	})
	.catch(function(error){
		console.log(error)
	})