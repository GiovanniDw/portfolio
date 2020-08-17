import React from 'react';
import { items } from '../../data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card({ id, title, category, theme }) {
	return (
		<motion.li
			whileHover={{ scale: 0.95 }}
			whileTap={{ scale: [0.9, 1] }}
			className={`card ${id}`}
		>
			<motion.div className='card-content-container'>
				<motion.div
					className='card-content'
					layoutId={`card-container-${id}`}
					whileHover={{ scale: 2 }}
				>
					<motion.div
						className='card-image-container'
						layoutId={`card-image-container-${id}`}
					>
						<motion.img
							className='card-image'
							src={`images/projects/${id}/${id}.png`}
							alt=''
						/>
					</motion.div>
					<motion.div
						className='title-container'
						layoutId={`title-container-${id}`}
					>
						<span className='category'>{category}</span>
						<h2>{title}</h2>
					</motion.div>
				</motion.div>
			</motion.div>
			<Link to={id} className={`card-open-link`} />
		</motion.li>
	);
}


export function List({ selectedId }) {
    return (
		<section id='projects' className='projects'>
			<motion.div className='container'>
				<motion.h2>Projects</motion.h2>
				<ul className='card-list'>
					{items.map((card) => (
						<Card
							key={card.id}
							{...card}
							isSelected={card.id === selectedId}
						/>
					))}
				</ul>
			</motion.div>
		</section>
	);
}