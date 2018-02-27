import React from 'react'
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'


export default class AddToCart extends React.Component {
	state = {
		adding: false
	};

	addToCart = (clicked) => {

		this.setState({
			adding: true
		});

		const { products, cartItems, addCart } = this.props;

		//add cart into store
		var selectedItem = products.filter(prod => prod.id === clicked);
		//ToDO: Check if the item already exists to be added!
		var restItems = cartItems.filter(prod => prod.id !== clicked);
		if(restItems.length === cartItems.length){
			addCart(selectedItem);
		}

		// We use this info in the component itself
		this.setState({
			adding: false
		})
	};


	render() {
		return (
			<button className={`ui button ${this.props.additionalClass} ${this.state.adding ? 'disabled' : ''}`} onClick={() => { this.addToCart(this.props.productId)}}>
				<i className="add to cart icon"></i> Add to Cart
			</button>
		);
	}
}
