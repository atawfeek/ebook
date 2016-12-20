import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moltin from '../vendor/moltin';
import 'semantic-ui-css/semantic.min.css'
import Header from './Header';
import Spotlight from './Spotlight'

class App extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			_this.setState({
				data: moltin.Product.List()
			});
		});
	}

  render() {
		return (
			<div className="app-container">
				<Header />
				<div className="ui container">
					<div className="ui grid">
						<Spotlight articles={this.state.data}/>
					</div>
				</div>
			</div>
    );
  }
}

export default App;