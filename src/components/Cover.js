import React from 'react';
import moltin from '../vendor/moltin';
import {Link} from 'react-router';
import LoadingIcon from '../public/ripple.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CartContainer } from '../containers/cart.container';
import config from '../vendor/config'

export default class Cover extends React.Component {

	render() {

		const {products, loading} = this.props;
		var lastProduct;
		var featured_category;
		var backgroundImage;
		
		if(!loading){
			const filteredProducts = products.filter(product => product.featured_large !== null);
			lastProduct = filteredProducts[filteredProducts.length - 1];  // since we display only one item, let's take the newest one
			featured_category = config.featuredCategoryId; // ID of the category we use in the FEATURED section of the site
			backgroundImage = {
				backgroundImage: 'url(' + lastProduct.featured_large.data.url.https + ')',
			};

			return (
				<div className="cover" style={backgroundImage}>
					<div className="cover-inner">
						<div className="content">
							<div className="inner">
								<h1>{lastProduct.title}</h1>
								<p>{lastProduct.description}</p>
								<span className="price">
								{lastProduct.price.value}
							</span>
								<CartContainer additionalClass="inverted" productId={lastProduct.id}/>
								<Link className="ui inverted button" to={`/product/${lastProduct.id}`}>Details</Link>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else{
			return (
				<div>
						<img src={LoadingIcon} alt="Loading"/>
				</div>
			);
		}
	}
}
