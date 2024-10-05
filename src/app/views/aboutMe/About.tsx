'use client'
import { motion } from "framer-motion";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";

export default function About() {
	return (
		<section className="container py-20">
			<h1 className="text-5xl md:text-7xl font-bold text-start md:text-center">About</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 md:mb-36 mt-12 gap-x-24">
				<motion.div 
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: 50 }}
				transition={{ duration: 0.5 }}
				>
					<p className="text-justify w-full font-medium mb-3 md:mb-24">My interest in creating web pages and applications stemmed from my curiosity about computers and the complexities of website design.
						I ended myself in the software industry by default because of this adventure. After working as a frontend developer for three years,
						I now combine my knowledge and enthusiasm to produce fluid digital experiences. Willing to learn new things all the time 💻</p>
					<h1 className="text-2xl mb-4 font-normal text-start">Social Links</h1>
					<SocialLinks />
				</motion.div>
				<motion.div className="flex flex-col text-start" 
					    initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.5, delay: 0.2 }}
				>
					<h1 className="text-2xl font-normal mt-3 md:mt-0">Technology Stack</h1>
					<TechStack />
				</motion.div>
			</div>
		</section>
	)
}