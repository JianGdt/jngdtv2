'use client'
import Image from "next/image";
import avatar from '@/app/assets/avatar.png'
import { motion } from "framer-motion";
import ActionButton from "@/app/components/ActionButton";
export default function Hero() {
	return (
		<motion.section className="container grid min-h-screen md:grid-cols-2 md:mb-56 md:p-2 grid-cols-1 place-items-center" 
		initial={{ opacity: 0, x: "-100%" }}
		animate={{ opacity: 1, x: "0%" }}
		transition={{
		  type: "spring",
		  duration: 1.5,
		}}
		>
			<div className="align-middle w-full mx-auto block items-center text-start">
				<span className="text-5xl font-bold">
					Jian Godito.
				</span>
				<p className="font-medium text-xl">Front-end Developer</p>
				<p className="font-normal text-sm text-dark dark:text-light">Experienced Front-End Developer Proficient in JavaScript (React.js/Vue.js) and TypeScript, Crafting Seamless and Innovative User Experiences</p>
				<ActionButton/>
			</div>
			<div className="hidden md:flex">
				<Image src={avatar} alt='avatar' priority width={900} height={50}/>
			</div>
		</motion.section>
	);
}