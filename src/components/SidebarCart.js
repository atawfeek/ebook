import React from 'react';
import events from '../vendor/pub-sub';
import moltin from '../vendor/moltin';
import _ from 'lodash/object';
import {Link} from 'react-router';
import LoadingIcon from '../public/ripple.svg';

export default class SidebarCart extends React.Component {

	constructor(){
		super();
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
		let cartContent = _.values(this.props.cartItems);

		console.log(this.props.cartItems);

		// If the cart is not empty, display the cart items
		if (this.props.cartItems.length >= 1) {
			preparedCartContent = cartContent.map((result, id) => {
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
							<span className="header">{result.name} <br/><span className="price">{result.price.data.formatted.with_tax}</span></span>
						</div>
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
			<div className="sidebar-cart sidebar-element">
				<h4>In Cart: <span className="price">{`\u20ac${this.calcTotalPrice(this.props.cartItems)}`}</span></h4>
				{/*// If the cart is not empty, add 'active' class to it*/}
				<Link to="/checkout" className={`ui checkout button tiny ${this.props.cartItems.length >= 1 ? 'active': ''}`}>
					<i className="paypal icon"></i>Checkout</Link>
				<div className="ui items">
					{preparedCartContent}
				</div>
			</div>
		);
	}
}
