import React, { Component} from 'react';
import { Link } from 'react-scroll';


class Menu extends Component {
    state = {};
    render() {
        return (
			<aside>
				<nav className='main-nav'>
					<Link
						href='#About'
						to='about'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						hashSpy={true}
					>
						<img
							src={process.env.PUBLIC_URL + '/images/logo.svg'}
							className='App-logo'
							alt='logo'
						/>
					</Link>
					<Link
						href='#Work'
						to='work'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						hashSpy={true}
					>
						Work
					</Link>
					<Link
						href='#Contact'
						to='contact'
						spy={true}
						smooth={true}
						offset={0}
						duration={500}
						hashSpy={true}
					>
						Contact
					</Link>
				</nav>
			</aside>
		);
    }
}



export default Menu;

