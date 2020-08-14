import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
			<section id='About' className='about'>
				<h1>
					Hi <span role='img'>👋</span>, <br></br>My name is{' '}
					<span className='my-name'>Giovanni</span>,<br></br> I’m a CMD student
				</h1>
			</section>
		);
    }
}
