let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let categoriaId = queryStringObj.get('categoryId');


fetch(`'https://dummyjson.com/products/category/${categoriaId}'`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data)
        


	})
	.catch(function(error){
		console.log(error)
	})