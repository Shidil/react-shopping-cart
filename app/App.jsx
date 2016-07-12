import React from 'react';
import ReactDOM from 'react-dom';
import style from './App.css';
import ProductGrid from './grid/ProductGrid'
console.log(ProductGrid);
export class App extends React.Component {
	render() {
		return (
			<div className="view">
				<h1 className="title">Shopping Cart</h1>
				<ProductGrid/>
			</div>

		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
