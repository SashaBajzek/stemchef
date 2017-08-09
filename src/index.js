import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import About from './About';
import Header from './Header';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={App} />
				<Route path="/about" exact component={About} />
				<Route path="*" component={App} />
			</Switch>
		</div>
	</Router>, document.getElementById('root')
);

