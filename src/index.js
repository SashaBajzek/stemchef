import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Home from './Home';
import Contact from './Contact';
import Header from './Header';
import OurStory from './OurStory';
import SummerCamp from './SummerCamp';

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
				<Route path="/" exact component={Home} />
				<Route path="/contact" exact component={Contact} />
				<Route path="/our-story" exact component={OurStory} />
				<Route path="/summer-camp-" exact component={SummerCamp} />
				<Route path="*" component={Home} />
			</Switch>
		</div>
	</Router>, document.getElementById('root')
);
