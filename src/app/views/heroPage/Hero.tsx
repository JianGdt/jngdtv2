import HeroName from "@/app/views/heroPage/components/HeroName"
import NavItem from "@/app/views/heroPage/components/NavItem"
import SocialMedia from "@/app/views/heroPage/components/SocialMedia"

export default function Hero() {
	return (
		<header className="flex justify-evenly align-middle text-center">
			<HeroName name="JnGdt" />
			<NavItem />
			<SocialMedia />
		</header>
	);
}