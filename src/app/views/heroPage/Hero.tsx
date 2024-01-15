import HeroLogo from "@/app/layouts/components/HeroLogo";
import myLogo from '@/app/assets/jgLogo.png'

export default function Hero() {
	return (
		<figure className="flex justify-evenly align-middle text-center">
			<HeroLogo myLogo={myLogo} />
		</figure>
	);
}