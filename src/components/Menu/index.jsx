import React, { Component} from 'react';
import { Link } from 'react-scroll';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';




class Menu extends Component {
    state = {};
    render() {
        return (
			<aside>
				<motion.nav className='main-nav'>
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
							src={process.env.PUBLIC_URL + '/images/logo.svg'}
							className='App-logo'
							alt='logo'
						/>
					</Link>
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
						<span>Projects</span>
					</Link>
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
				</motion.nav>
			</aside>
		);
    }
}



export default Menu;

