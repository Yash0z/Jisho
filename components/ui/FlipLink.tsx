import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.035;

interface FlipLinkProps {
	children: string;
	href: string;
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
	return (
		<motion.a
			initial='initial'
			whileHover='hovered'
			target='_blank'
			href={href}
			className='absolute h-13 overflow-hidden whitespace-nowrap text-2xl font-nacelle uppercase dark:text-white/90 sm:text-4xl md:text-6xl '
			style={{
				lineHeight: 0.825, // Adjust line height for better spacing
			}}
		>
			<div className='mt-2'>
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: 0,
							},
							hovered: {
								y: "-100%",
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className='inline-block'
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
			<div className='absolute inset-y-2  '>
				{children.split("").map((l, i) => (
					<motion.span
						variants={{
							initial: {
								y: "100%",
							},
							hovered: {
								y: 0,
							},
						}}
						transition={{
							duration: DURATION,
							ease: "easeInOut",
							delay: STAGGER * i,
						}}
						className='inline-block'
						key={i}
					>
						{l}
					</motion.span>
				))}
			</div>
		</motion.a>
	);
};

export default FlipLink;
