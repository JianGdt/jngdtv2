'use client'
import Image from "next/image";
import avatar from '@/app/assets/avatar.png'
import { motion } from "framer-motion";
export default function Hero() {
	return (
		<motion.section className="container grid sm:grid-cols-2 md:p-2 grid-cols-1 place-items-center" 
		initial={{ opacity: 0, x: "-100%" }}
		animate={{ opacity: 1, x: "0%" }}
		transition={{
		  type: "spring",
		  stiffness: 150,
		  duration: 1.2,
		}}
		>
			<div className="align-middle block items-center text-start">
				<span className="text-5xl font-bold">
					Jian Godito.
				</span>
				<p className="font-medium">Front-end Developer</p>
				<p className="font-medium">Experienced Front-End Developer Proficient in JavaScript (React.js/Vue.js) and TypeScript, Crafting Seamless and Innovative User Experiences</p>
			</div>
			<div className="hidden md:flex">
				<Image src={avatar} alt='avatar' priority width={900} height={50}/>
			</div>
		</motion.section>
	);
}