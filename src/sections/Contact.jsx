import React, { Component } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Contact = () => {
	
	const { scrollYProgress } = useViewportScroll();
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
		return (
			<section id='contact' className='contact'>
				<motion.div className='container'>
					<motion.h2 className="section-title" style={{ scale: scale }}>
						Contact
					</motion.h2>
				</motion.div>
			</section>
		);
	
}

export default Contact;
