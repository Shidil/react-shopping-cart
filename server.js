const http = require('http')
const port = 4000

const data = {
	products: [
		{
			id: 1,
			name: "Blue Shirt",
			category: 1
		},
		{
			id: 2,
			name: "Green Shirt",
			category: 1
		},
		{
			id: 3,
			name: "Blue Jeans",
			category: 3
		},
		{
			id: 4,
			name: "Black Jeans",
			category: 3
		},
		{
			id: 5,
			name: "Brown Leather Jacket",
			category: 2
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