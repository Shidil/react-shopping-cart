import React from 'react';
import ReactDOM from 'react-dom';
import style from './ProductGrid.css';

import ProductItem from './product/ProductItem';
import ProductFilterItem from './filter/ProductFilter';
import BaseWebSrv from '../BaseWebSrv';

export default class ProductGrid extends React.Component {
	// default state
	_getInitialState() {
		return {
      data: {}
	  };
	}

	constructor(props) {
		super(props);
		this.state = this._getInitialState();
		this.webSrv = new BaseWebSrv();

	  let success = (res) => {
	  	this.setState( {data: res} );
  	};
	  this.webSrv.getJSON(props.source, success);
	}

	render() {
		var storeData = this.state.data;

		// show loading screen if products not fetched
		if (!storeData.products) {
			return (<h2>Loading...</h2>);
		}

		var productList  = storeData.products,
				categories 	 = this.state.data.category;

		let productItems = productList.map( product => {
			return (<ProductItem key={product.id} data={product} />);
		});
		let filterItems = categories.map( cat => {
			return (<ProductFilterItem key={cat.id} data={cat} />);
		});

		return (
			<div>
				<div className="view">
					<section className="grid">
		      	{productItems}
		      </section>
	      </div>
	      <div className="bar">
		    	<div className="filter">
		    		{filterItems}
		    	</div>
		    	<button className="cart">
		        <i className="cart__icon fa fa-shopping-cart"></i>
		        <span className="text-hidden">Shopping cart</span>
		        <span className="cart__count">0</span>
		    	</button>
		    </div>
	    </div>
		);
	}
}

