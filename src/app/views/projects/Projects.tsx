'use client'
import { projects } from "@/app/constant/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

  return (
    <section className="container py-20">
      <h1 className="text-5xl md:text-7xl font-bold text-start md:text-center">Projects</h1>
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
                  <Image src={project.imageUrl} alt='techstack' width={900} height={900} className="transform hover:scale-125 transition duration-700 ease-out object-cover h-full w-full" />
                </div>
              </div>
              <div className="my-1 leading-1">
                <p className="my-2 flex leading-5 font-normal font-sans">{project.description}</p>
              <div className="flex m-auto py-2 font-sans flex-wrap gap-2">
                {project.stack.split(',').map((tech, index) => (
                  <span key={index} className="bg-dark p-1 px-2 flex text-center justify-center rounded-md max-w-[100px] text-light">{tech}</span>
                ))}
              </div>
              </div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}