import React, { Component } from 'react';
import moltin from '../vendor/moltin';
import ProductList from './ProductList';
import {CoverContainer} from '../containers/cover.container'

class Home extends React.Component {
	
	constructor(){
		super();
	}
	componentWillMount() {
		const {products,getProducts} = this.props;
		
		getProducts();
	}

	render() {
		
		const {products, loading, error} = this.props;
		return (
			<div className="home-intro">
				<CoverContainer/>
				<ProductList products={this.props.products}/>
			</div>
		);
	}
}

export default Home;
