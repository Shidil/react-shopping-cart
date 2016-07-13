import React from 'react';
import ReactDOM from 'react-dom';
import style from './App.css';
import ProductGrid from './grid/ProductGrid'

export class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="title">Shopping Cart</h1>
				<ProductGrid source="http://localhost:4000"/>
			</div>

		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
