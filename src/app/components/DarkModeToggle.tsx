'use client'

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import lightMode from '@/app/assets/light.svg'
import darkMode from '@/app/assets/moon.svg'
import Image from "next/image";

export default function DarkModeToggle() {
    const {theme, setTheme} = useTheme();
    const [isDarkMode, setisDarkMode] = useState<boolean>(false);
  
    useEffect(() => {
        setisDarkMode(true);
    }, []);

return (
    <button
    type="button"
    className="p-3 rounded focus:outline-none"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
    {isDarkMode && (
        <>
            {theme === 'dark' ? (
            <Image src={lightMode} alt="light mode" width={20} height={10} />
            ) : (
            <Image src={darkMode} alt="dark mode" width={20} height={10} />
            )}
        </>
        )}
    </button>
    )
}