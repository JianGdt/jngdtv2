import Link from "next/link";


import Image, { StaticImageData } from "next/image";



export default function HeroLogo({myLogo}: {myLogo: string | StaticImageData}) {
    return (
        <Link 
            href="/"
            className="flex w-full justify-center align-middle text-center"
        >
            <Image src={myLogo} alt='my Logo' width={100} height={10} />
        </Link>
    )
}