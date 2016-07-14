const http = require('http')
const port = 4000

const data = {
	products: [
		{
			id: 1,
			name: "Blue Shirt",
			category: 1,
			price: 80,
			brand: "Woodland",
			images: ['http://tympanus.net/Blueprints/FilterableProductGrid/images/product1/2.png']
		},
		{
			id: 2,
			name: "Green Shirt",
			category: 1,
			price: 80,
			brand: "Woodland",
			images: ['http://tympanus.net/Blueprints/FilterableProductGrid/images/product1/3.png']
		},
		{
			id: 3,
			name: "Blue Jeans",
			category: 3,
			price: 80,
			brand: "Woodland",
			images: ['http://tympanus.net/Blueprints/FilterableProductGrid/images/product6/3.png']
		},
		{
			id: 4,
			name: "Black Jeans",
			category: 3,
			price: 80,
			brand: "Woodland",
			images: ['http://tympanus.net/Blueprints/FilterableProductGrid/images/product6/3.png']
		},
		{
			id: 5,
			name: "Brown Leather Jacket",
			category: 2,
			price: 80,
			brand: "Woodland",
			images: ['http://tympanus.net/Blueprints/FilterableProductGrid/images/product4/1.png']
		}
	],
	category: [
		{
			id: 1,
			title: "Shirts"
		},
		{
			id: 2,
			title: "Jackets"
		},
		{
			id: 3,
			title: "Jeans"
		}
	],
	title: "React Shopping Cart",
	max_cart: 4
}

const requestHandler = (request, response) => {
	// Set CORS headers
	response.setHeader('Access-Control-Allow-Origin', '*');
	response.setHeader('Access-Control-Request-Method', '*');
	response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	response.setHeader('Access-Control-Allow-Headers', '*');
  response.writeHead(200, {
    "Content-Type": "application/json"
  });
  response.end(JSON.stringify(data));
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})