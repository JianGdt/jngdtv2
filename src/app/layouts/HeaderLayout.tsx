export default function AppLayout({children}: {children: React.ReactNode}) {

    return (
        <header className="flex justify-around p-12 dark:bg-black items-center align-middle">
            {children}
        </header>
    )
}