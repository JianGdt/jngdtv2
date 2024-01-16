import { projects } from "@/app/constant/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {

return (
<section>
	<h1 className="text-5xl md:text-7xl font-medium text-center drop-shadow-text">Projects</h1>
	<ul className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:my-20 my-10 pb-40">
		{projects.map((project) => (
		<li key={project.name}>
			<Link href={project.link} className="w-full block shadow-2xl">
			<div className="relative overflow-hidden rounded-lg">
			<div className="h-72 object-cover">
					<Image	src={project.imageUrl} alt='techstack' width={900} height={900} className="transform hover:scale-125 transition duration-700 ease-out object-cover h-full w-full"/>
			</div>
			</div>
			</Link>
		</li>
		))}
	</ul>
</section>
	)
}