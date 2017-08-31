import React from 'react';
import ReactDOM from 'react-dom';
import ProgramFall from './components/ProgramFall/ProgramFall';
import App from './components/App/App';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import OurStory from './components/OurStory/OurStory';
import Programs from './components/Programs/Programs';
import ScrollToTop from './components/ScrollToTop';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App>
			
			<ScrollToTop>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/our-story" exact component={OurStory} />
	
					<Programs>
						<Switch>
							<Route path="/programs/after-school" component={ProgramFall} />
							<Route path="/programs*" component={ProgramFall} />
						</Switch>
					</Programs>
			
					<Route path="*" component={Home} />
				</Switch>
			</ScrollToTop>
			
		</App>
	</Router>, document.getElementById('root')
);
