'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

type navItem = {
    name: string,
    path: string
}

export default function MenuItems({name,path}: navItem) {
  const pathname = usePathname()
  const isActive = path === pathname;


  return (
    <li className="cursor-pointer">
      <Link href={path}>
        <span
          className={`transition duration-75 ease-in-out ${
            isActive ? "font-bold " : "dark:text-light text-dark"
          }`}
        >
          {name}
        </span>
      </Link>
    </li>
  );
}