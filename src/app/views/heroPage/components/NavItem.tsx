import Link from "next/link";

export default function NavItem() {

return (
    <nav>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">about</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/">Home</Link>
            </li>
        </ul>
    </nav>
    )
}