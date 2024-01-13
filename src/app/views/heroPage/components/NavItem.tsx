import Link from "next/link";

export default function NavItem() {

return (
    <nav>
        <ul className="flex gap-6">
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/projects">Projects</Link>
            </li>
            <li>
                <Link href="/experiences">Experiences</Link>
            </li>
        </ul>
    </nav>
    )
}