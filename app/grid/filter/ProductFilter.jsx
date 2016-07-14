import React from 'react';
import ReactDOM from 'react-dom';
import style from './ProductFilter.css';

export default class ProductFilterItem extends React.Component{
	constructor(props) {
		super(props);
		this.props = props;
	}
	render() {
		return (
			<div>
        <button className="action filter__item" data-filter={this.props.data.title}>
            <i className="icon icon--jacket"></i>
            <span className="action__text">{this.props.data.title}</span>
        </button>
			</div>
		);
	}
}
