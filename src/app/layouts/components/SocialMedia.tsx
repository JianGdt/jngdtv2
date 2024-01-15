import { socialMedia } from "@/app/constant/socialMedia";
import Link from "next/link";
import Image from "next/image"; 
import DarkModeToggle from "@/app/components/DarkModeToggle";

export default function SocialMedia() {
return (
    <section>
        <ul className="flex gap-2 items-center">
            {socialMedia.map((item, index) => (
                <li key={index}>
                    <Link href={item.link}>
                        <Image src={item.imageUrl} alt={item.name} width={20} height={20} />
                    </Link>
                </li>
            ))}
        <DarkModeToggle/>
        </ul>
    </section>
    );
}