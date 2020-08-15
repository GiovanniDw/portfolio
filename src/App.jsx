import React, { Component } from 'react';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Menu from './components/Menu';
import About from './sections/About';
import Projects from './sections/Projects';
import { Item } from './components/Project/Item';
import { List } from './components/Project/List';

import Contact from './sections/Contact';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function Store({ match }) {
	let { id } = match.params;
	const imageHasLoaded = true;

	return (
		<>
			<List selectedId={id} />
			<AnimatePresence>
				{id && imageHasLoaded && <Item id={id} key='item' />}
			</AnimatePresence>
		</>
	);
}

class App extends Component {
	render() {
		return (
			<div
				className='App'
				style={{
					background: `url(${
						process.env.PUBLIC_URL + '/images/bg.svg'
					}) no-repeat 10% fixed`,
				}}
			>
				<Menu />
				<main>
					<About />
					{/* <Projects /> */}
					<AnimateSharedLayout type='crossfade'>
						<Router>
							<Route path={['/:id', '/']} component={Store} />
						</Router>
					</AnimateSharedLayout>
					<Contact />
				</main>
			</div>
		);
	}
}

export default App;

