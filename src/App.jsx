import React, { Component } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Menu from './components/Menu';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
	render() {
		return (
			<div
				className='App'
				style={{
					// background: `url(${
					// 	process.env.PUBLIC_URL + '/images/bg.svg'
					// }) no-repeat 10% fixed`,
				}}
			>
				<main>
					{/* <Projects /> */}
					<AnimateSharedLayout type='crossfade'>
						<Router basename='/portfolio'>
							<Menu />
							<About />
							<Route path={['/:id', '/']} component={Projects} />
							<Contact />
						</Router>
					</AnimateSharedLayout>
				</main>
			</div>
		);
	}
}

export default App;

