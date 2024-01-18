import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";

export default function About() {
return (
	<section className="container">
		<h1 className="text-5xl md:text-7xl font-medium text-center drop-shadow-text">About</h1>
		<div className="grid grid-cols-1 md:grid-cols-2 md:mb-24 mt-12 gap-x-24">
		<div>
		<p className="text-justify w-full font-medium mb-3 md:mb-24">My interest in creating web pages and applications stemmed from my curiosity about computers and the complexities of website design. 
		I ended myself in the software industry by default because of this adventure. After working as a frontend developer for two years, 
		I now combine my knowledge and enthusiasm to produce fluid digital experiences. Willing to learn new things all the time 💻</p>
		<h1 className="text-2xl mb-4 font-bold">Social Links</h1>
		<SocialLinks/>
		</div>
		<div className="flex flex-col">
		<h1 className="text-2xl font-bold mt-3 md:mt-0">Technology Stack</h1>
		<p className="text-sm mb-6">For 2 years</p>
		<TechStack/>
		</div>
		</div>
	</section>
	)
}