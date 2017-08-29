import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import AfterSchool from './AfterSchool';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import OurStory from './OurStory';
import Programs from './Programs';
import ScrollToTop from './ScrollToTop';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Header />
			<ScrollToTop>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/our-story" exact component={OurStory} />
	
					<Programs>
						<Switch>
							<Route path="/programs/after-school" component={AfterSchool} />
							<Route path="/programs*" component={AfterSchool} />
						</Switch>
					</Programs>
			
					<Route path="*" component={Home} />
				</Switch>
			</ScrollToTop>
			<Footer />
		</div>
	</Router>, document.getElementById('root')
);
