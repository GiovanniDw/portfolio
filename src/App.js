import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className='App'>
			<header>
				<div className='header-left'>
					<img
						src={'/images/logo.svg'}
						className='App-logo'
						alt='logo'
					/>
				</div>
				<div className='header-right'>
					<nav className='main-nav'> 
						<a href='About'>About</a>
						<a href='Work'>Work</a>
						<a href='Contact'>Contact</a>
					</nav>
				</div>
			</header>
			<main>
				<section>
					<h1>
						Hi👋, <br></br>My name is Giovanni,<br></br> I’m a CMD
						student
					</h1>
					
				</section>
				<section>
					<h2>Work</h2>

					<article></article>
					<article></article>
					<article></article>
					<article></article>
				</section>
              <section>
                  <h2>Contact</h2>
              </section>
			</main>
		</div>
  );
}

export default App;
