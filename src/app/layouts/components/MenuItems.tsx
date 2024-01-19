'use client'
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type navItem = {
    name: string,
    path: string
}

export default function MenuItems({name,path}: navItem) {
  const pathname = usePathname()
  const router = useRouter()
  const isActive = path === pathname;

  const navigateTo = useCallback(() => {
    router.push(path)
  },[router,path])

  return (
    <li onClick={() => navigateTo()} className="cursor-pointer">
        <span
          className={`transition duration-75 ease-in-out ${
            isActive ? "font-bold " : "dark:text-light text-dark"
          }`}
        >
          {name}
        </span>
    </li>
  );
}