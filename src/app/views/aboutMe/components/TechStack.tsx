import { techStack } from "@/app/constant/techStack";
import Image from "next/image";

export default function TechStack() {

return (
    <ul className="grid grid-cols-5 gap-2">
        {techStack.map((tech, idx) => (
            <li key={idx} className="rounded-md bg-white flex justify-center p-3 drop-shadow-2xl">
                <Image src={tech.imageUrl} alt='techstack' width={100} height={100} />
            </li>
        ))}
    </ul>
    )
}