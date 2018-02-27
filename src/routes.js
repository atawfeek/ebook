import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import { HomeContainer } from "./containers/home.container";
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Category from './components/Category';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={HomeContainer}/>
		<Route path="product/:id" component={ProductPage}/>
		<Route path="category/:id" component={Category}/>
		<Route path="checkout" component={Checkout}/>
	</Route>
);

export default routes;
