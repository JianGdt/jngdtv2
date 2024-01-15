import Link from "next/link";

export default function MyName({myName}: {myName: string}) {
    return (
        <Link href="/">
            <span>{myName}</span>
        </Link>
    )
}