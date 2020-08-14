import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class About extends Component {
    render() {
        return (
			<motion.section id='About' className='about'>
				<motion.h1>
					Hi <span role='img'>👋</span>, <br></br>My name is{' '}
					<motion.span
						className='my-name'
					>
						Giovanni
					</motion.span>
					,<br></br> I’m a CMD student
				</motion.h1>
			</motion.section>
		);
    }
}
