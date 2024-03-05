'use client'
import { projects } from "@/app/constant/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

return (
<section className="container flex flex-col justify-center min-h-[52rem]">
	<h1 className="text-5xl md:text-7xl font-medium text-center drop-shadow-text">Projects</h1>
	<motion.ul
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:my-20 my-10 pb-40"
      initial={{ opacity: 0, x: "-50%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }} 
    >
      {projects.map((project, idx) => (
        <motion.li key={project.name} style={{ listStyleType: 'none' }} 
          initial={{ opacity: 0, x: "-50%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          <Link href={project.link} className="w-full block shadow-2xl">
            <div className="relative overflow-hidden rounded-lg">
              <h1 className="absolute top-0 z-10 bg-light p-1 rounded-sm text-dark font-bold">{project.name}</h1>
              <div className="h-72 object-cover">
                <Image src={project.imageUrl} alt='techstack' width={900} height={900} className="transform hover:scale-125 transition duration-700 ease-out object-cover h-full w-full"/>
              </div>
            </div>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
</section>
	)
}