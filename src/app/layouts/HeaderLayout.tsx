export default function AppLayout({children}: {children: React.ReactNode}) {

    return (
        <header className="block sm:flex drop-shadow-lg py-6 justify-between items-center align-middle">
            {children}
        </header>
    )
}