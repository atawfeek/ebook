import React from 'react'
import {Link} from 'react-router'
import {CartCountContainer} from '../containers/cart.container'
import Logo from '../public/logo.png'
import events from '../vendor/pub-sub';

export default class Header extends React.Component {

	showSidebar = () => {
		events.publish('SIDEBAR_VISIBILITY', {
			visible: true
		});
	};

	render() {
		return (
			<header>
				<div className="ui fixed secondary menu">
					<div className="ui container fluid">
						<Link to="/" className="header logo item">
							<img src={Logo} alt=""/>
						</Link>
						<Link to="/" className="general item">Home</Link>
						<button className="item navigation-button" onClick={this.showSidebar}><i className="list layout icon"></i> Menu</button>
						<CartCountContainer/>
					</div>
				</div>
			</header>
		);
	}
}
