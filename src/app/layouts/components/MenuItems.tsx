import Link from "next/link";

export default function MenuItems() {

    return (
        <>
        <li>
            <Link href="/about">About</Link>
        </li>
        <li>
             <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/experiences">Experiences</Link>
        </li>
        </>
    )
}