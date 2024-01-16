export default function AppLayout({children}: {children: React.ReactNode}) {

    return (
        <header className="block sm:flex py-6 px-10 justify-between dark:bg-black items-center align-middle">
            {children}
        </header>
    )
}