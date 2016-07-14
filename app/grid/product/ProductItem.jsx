import React from 'react';
import ReactDOM from 'react-dom';
import style from './ProductItem.css';
import shallowEqual from "react-pure-render/shallowEqual";

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
	}

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqual(this.props, nextProps);
  }

	render() {

    var productImages = this.props.product.images.map( (image, i) => {
      return (<div key={i} className="slider__item">
                <img src={image} alt={this.props.product.name} title={this.props.product.name} />
              </div>);
    });

		return (
			<div className="grid__item">
				<div className="slider">
          {productImages}
        </div>
        <div className="meta">
          <h3 className="meta__title">{this.props.product.name}</h3>
          <span className="meta__brand">{this.props.product.brand}</span>
          <span className="meta__price">${this.props.product.price}</span>
        </div>
        <button className="action action--button action--buy">
          <i className="fa fa-shopping-cart"></i>
          <span className="text-hidden">Add to cart</span>
        </button>
			</div>
		);
	}
}