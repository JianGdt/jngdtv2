import { socialMedia } from "@/app/constant/socialMedia";
import Link from "next/link";

export default function SocialLinks() {

    return (
        <ul>
            {socialMedia.map((social) => (
                <li key={social.name} className="flex flex-row text-center leading-1 justify-start">
                    <Link href={social.link} className="hover:translate-x-6 transition-all delay-100 duration-200">
                        <span className="font-normal">{social.name}</span>
                    </Link>
                </li>
            )
            )}
        </ul>
    )
}