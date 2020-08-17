import React, { Component } from 'react'
import { motion } from 'framer-motion'

export default class About extends Component {
    render() {
        return (
			<motion.section id='about' className='about'>
                <motion.h1
                    animate={{
                        scale: [0.9, 1],
                        opacity: [0, 1],
                        y: [200,0]
                    }}
      >
					Hi <span role='img' aria-label='hi'>👋</span>, <br></br>My name is{' '}
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
