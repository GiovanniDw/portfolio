import React, {useEffect, useState} from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { items } from '../../data';
import { IoIosClose } from 'react-icons/io';
export function Item({ id }) {
	const { category, title, backgroundColor, text, url } = items.find((item) => item.id === id);
const { scrollYProgress } = useViewportScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

const [canScroll, setCanScroll] = useState(false);

useEffect(() => {
	if (canScroll === false) {
		document.querySelector('body').classList.add('no-scroll');
	} else {
		document.querySelector('body').classList.remove('no-scroll');
	}
}, [canScroll]);
console.log(canScroll)
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.15 } }}
				transition={{ duration: 0.2, delay: 0.15 }}
				style={{ pointerEvents: 'auto' }}
				className='overlay'
			>
				<Link to='/#projects' onClick={() => setCanScroll(true)} />
			</motion.div>
			<div className='card-content-container open'>
				<motion.div
					className='card-content'
					layoutId={`card-container-${id}`}
				>
					<motion.div
						style={{
							backgroundColor: backgroundColor,
						}}
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
					<motion.div className='close-icon'>
						<Link
							to='/#projects'
							onClick={() => setCanScroll(true)}
						>
							{' '}
							<IoIosClose />{' '}
						</Link>
					</motion.div>
					<motion.div className='content-container' animate>
						<motion.a href={url}>{url}</motion.a>
						<motion.p>{text}</motion.p>
					</motion.div>
				</motion.div>
			</div>
		</>
	);
}
