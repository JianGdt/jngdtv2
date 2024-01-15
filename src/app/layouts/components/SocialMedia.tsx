import { socialMedia } from "@/app/constant/socialMedia";
import Link from "next/link";
import Image from "next/image"; 

export default function SocialMedia() {
return (
    <section>
        <ul className="flex gap-2">
            {socialMedia.map((item, index) => (
                <li key={index}>
                    <Link href={item.link}>
                        <Image src={item.imageUrl} alt={item.name} width={20} height={20} />
                    </Link>
                </li>
            ))}
        </ul>
    </section>
    );
}