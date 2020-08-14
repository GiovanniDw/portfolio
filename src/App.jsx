import React, { Component } from 'react';
import Menu from './components/Menu';
import About from './sections/About';
import Work from './sections/Work';
import Contact from './sections/Contact';

import './App.css';

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
					<Work />
					<Contact />
				</main>
			</div>
		);
	}
}

export default App;

