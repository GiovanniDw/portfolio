import React, { Component } from 'react';
import { motion, useViewportScroll } from 'framer-motion';

const Contact = () => {
	
		const { scrollYProgress } = useViewportScroll();
		return (
			<section id='contact' className='contact'>
				<motion.div className='container'>
					<motion.h2 style={{ scaleX: scrollYProgress }}>
						Contact
					</motion.h2>
				</motion.div>
			</section>
		);
	
}

export default Contact;
