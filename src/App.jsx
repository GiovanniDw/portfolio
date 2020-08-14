import React from 'react';
import Menu from './components/Menu';

import './App.css';

const App = () => {
  return (
		<div
			className='App'
			style={{
				background: `url(${process.env.PUBLIC_URL + '/images/bg.svg'}) no-repeat center fixed`,
			}}
		>
			<header>
				<div className='logo'>
					<img
						src={process.env.PUBLIC_URL + '/images/logo.svg'}
						className='App-logo'
						alt='logo'
					/>
				</div>
			</header>
			<Menu />
			<main>
				<section id='About'>
					<h1>
						Hi👋, <br></br>My name is Giovanni,<br></br> I’m a CMD
						student
					</h1>
				</section>
				<section id='Work'>
					<h2>Work</h2>

					<article></article>
					<article></article>
					<article></article>
					<article></article>
				</section>
				<section id='Contact'>
					<h2>Contact</h2>
				</section>
			</main>
		</div>
  );
}

export default App;

