import React, { Component} from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

class Menu extends Component {
    state = {};
    render() {
        return (
			<motion.aside>
				<motion.nav className='main-nav'>
					<motion.div
						style={{ scale: 0.4 }}
						whileHover={{ scale: 0.5 }}
						whileTap={{ scale: 0.3 }}
						transition={{ duration: 0.5, delay: 2 }}
						animate={{
							x: [-100, 0],
							duration: 0.5,
							delay: 4,
						}}
					>
						<Link
							href='#about'
							to='about'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							hashSpy={true}
							isDynamic={true}
						>
							<img
								src={
									process.env.PUBLIC_URL + '/images/logo.svg'
								}
								className='App-logo'
								alt='logo'
							/>
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.5, delay: 2.1 }}
						style={{ rotate: 90 }}
						animate={{
							x: [-100, 0],
							duration: 2,
							delay: 8,
						}}
					>
						<Link
							href='#projects'
							to='projects'
							spy={true}
							smooth={true}
							offset={-2}
							duration={500}
							hashSpy={true}
							isDynamic={true}
						>
							Projects
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						transition={{ duration: 0.5, delay: 2.2 }}
						style={{ rotate: 90 }}
						animate={{
							x: [-100, 0],
							duration: 3,
							delay: 8,
						}}
					>
						<Link
							href='#contact'
							to='contact'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							hashSpy={true}
							isDynamic={true}
						>
							Contact
						</Link>
					</motion.div>
				</motion.nav>
			</motion.aside>
		);
    }
}



export default Menu;

