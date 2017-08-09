import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App';
import Contact from './Contact';
import Header from './Header';
import Jobs from './Jobs';
import Locations from './Locations';
import OurStory from './OurStory';
import SummerCamp2017 from './SummerCamp2017';

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
				<Route path="/contact" exact component={Contact} />
				<Route path="/jobs" exact component={Jobs} />
				<Route path="/locations" exact component={Locations} />
				<Route path="/our-story" exact component={OurStory} />
				<Route path="/summer-camp-2017" exact component={SummerCamp2017} />
				<Route path="*" component={App} />
			</Switch>
		</div>
	</Router>, document.getElementById('root')
);
