import React from 'react';
import ReactDOM from 'react-dom';
import style from './ProductItem.css';

export default class ProductItem extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		return (
			<div className="grid__item">
				<div className="slider">
          <div className="slider__item"><img src="images/product1/1.png" alt="product1_1" /></div>
          <div className="slider__item"><img src="images/product1/2.png" alt="product1_2" /></div>
          <div className="slider__item"><img src="images/product1/3.png" alt="product1_3" /></div>
        </div>
        <div className="meta">
          <h3 className="meta__title">{this.props.data.name}</h3>
          <span className="meta__brand">Woodland</span>
          <span className="meta__price">${this.props.data.price}</span>
        </div>
        <button className="action action--button action--buy">
          <i className="fa fa-shopping-cart"></i>
          <span className="text-hidden">Add to cart</span>
        </button>
			</div>
		);
	}
}