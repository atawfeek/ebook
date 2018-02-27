import React, { Component } from 'react';
import events from '../vendor/pub-sub';
import _ from 'lodash/object';
import moltin from '../vendor/moltin';
import LoadingIcon from '../public/ripple.svg';
import {Link} from 'react-router';

export default class CartDetails extends React.Component {
	constructor(){
		super();
	}
	
	state = {
		loaded: true,
		removing: false
	};

	removeFromCart(clicked) {
		
		const {cartItems , removeCart} = this.props;

		removeCart(clicked);

	}

	calcTotalPrice(arr){
		if(arr.length === 0){
			return 0;
		}
		if(arr.length === 1){
			return parseInt(arr[0].price.data.formatted.with_tax.replace('\u20ac',''));
		}

		return parseInt(arr[0].price.data.formatted.with_tax.replace('\u20ac','')) + parseInt(this.calcTotalPrice(arr.slice(1)));
	}

	render() {
		let preparedCartContent;

		// If the cart is not empty, display the cart items
		if (this.props.cartItems.length >= 1) {
			preparedCartContent = this.props.cartItems.map((result, id) => {
				return(
					<div className="item" key={id}>
						<div className="ui tiny image">
							{
								(result.featured_small)
									// If we have an image set
									? <img src={result.featured_small.data.url.https} />

									//else put some placeholder
									: <img src="http://placehold.it/300x380" />
							}
						</div>
						<div className="content">
							<Link to={`/product/${result.id}`}>
								<span className="header">{result.name} <br/>
								<span className="price">{result.price.data.formatted.with_tax}</span>
							</span>
							</Link>
						</div>

						<button  onClick={() => { this.removeFromCart(result.id)}} className={`remove ui button ${this.state.removing ? 'disabled' : ''}`}>
							<i className="remove outline icon"></i></button>
					</div>
				)
			});
		}

		// If the cart is empty, display the message
		else {
			preparedCartContent = (
				<span className="empty">
					The Cart is empty
				</span>
			);
		}

		return (
			<div className="cart-details">
				<div className={`overlay ${this.state.loaded ? 'non-visible' : ''}`}>
					<img src={LoadingIcon} alt="Loading"/>
				</div>

				<div className="ui items">
					{preparedCartContent}

					<div className="total">
						<span className="text">TOTAL: </span>
						<span className="price">{`\u20ac${this.calcTotalPrice(this.props.cartItems)}`}</span>
					</div>
				</div>
			</div>
		);
	}
}
