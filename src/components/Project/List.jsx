import React from 'react';
import { items } from '../../data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card({ id, title, category, theme }) {
	return (
		<motion.li
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`card ${theme}`}
		>
			<div className='card-content-container'>
				<motion.div
					className='card-content'
					layoutId={`card-container-${id}`}
				>
					<motion.div
						className='card-image-container'
						layoutId={`card-image-container-${id}`}
					>
						<img
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
			</div>
			<Link to={id} className={`card-open-link`} />
		</motion.li>
	);
}

export function List({ selectedId }) {
    return (
      <section id='projects' className="projects">
				<h2>Projects</h2>
		<ul className='card-list'>
			{items.map((card) => (
				<Card
					key={card.id}
					{...card}
					isSelected={card.id === selectedId}
				/>
			))}
            </ul>
            </section>
	);
}