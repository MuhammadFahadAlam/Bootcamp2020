import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home, About, Product, ProductItems, Navbar } from '../components';

function RouteConfig() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route exact path='/product' component={Product} />
					<Route path='/product/:id' component={ProductItems} />
					<Route path='*' component={() => <h1>404 Not Found</h1>} />
				</Switch>
			</Router>
		</div>
	);
}

export default RouteConfig;
