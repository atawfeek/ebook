import React from 'react'
import events from '../vendor/pub-sub';
import {Link} from 'react-router'

export default class Cart extends React.Component {

	render() {
		
		return (
			<Link to="/checkout" className={`item ui right cart-item floated ${this.props.cartItems.length >= 1 ? 'green' : ''}`}>
				<span>{this.props.cartItems.length}</span>
				<i className="in cart icon"></i>
			</Link>
		);
	}
}
