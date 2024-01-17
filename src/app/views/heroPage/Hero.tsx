import Image from "next/image";
import avatar from '@/app/assets/avatar.png'
export default function Hero() {
	return (
		<section className="container grid sm:grid-cols-2 grid-cols-1 place-items-center">
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
		</section>
	);
}