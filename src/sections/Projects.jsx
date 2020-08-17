// import React, { Component, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import { Item } from '../components/Project/Item';
import { List } from '../components/Project/List';
// import { isTemplateExpression } from 'typescript';
// // export default class Work extends Component {
// // 	render() {
// // 		return (
			// <section id='Work' className="work">
			// 	<h2>Work</h2>

// // 				<article></article>
// // 				<article></article>
// // 				<article></article>
// // 				<article></article>
// // 			</section>
// // 		);
// // 	}
// // }


// export default function Work() {
// 	const [selectedId, setSelectedId] = useState(null);
// 	return (
// 		<AnimateSharedLayout type='crossfade'>
			
// 				{projects.map((project) => (
// 					{/* <Project key={project} /> */ }
					
// <motion.div layoutId={project.id}
// 				onClick={() => setSelectedId(item.id)}
// 				initial={{ borderRadius: 25 }}
// 			>
// 					</motion.div>
// 				))}
			
// 		</AnimateSharedLayout>
// 	);
// }

// function Project() {
// 	const [isOpen, setIsOpen] = useState(false);

// 	const toggleOpen = () => setIsOpen(!isOpen);

// 	return (
// 		<motion.div layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
// 			<motion.div className='avatar' layout />
// 			<AnimatePresence>{isOpen && <Content />}</AnimatePresence>
// 		</motion.div>
// 	);
// }

// function Content() {
// 	return (
// 		<motion.div
// 			layout
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			exit={{ opacity: 0 }}
// 		>
// 			<div className='row' />
// 			<div className='row' />
// 			<div className='row' />
// 		</motion.div>
// 	);
// }

// const projects = [0, 1, 2];





import React from 'react'

function Projects({ match }) {
	let { id } = match.params;
	const imageHasLoaded = true;

	return (
		<>
			<List selectedId={id} />
			<AnimatePresence>
				{id && imageHasLoaded && <Item id={id} key='item' />}
			</AnimatePresence>
		</>
	);
}

export default Projects
