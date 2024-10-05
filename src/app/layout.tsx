import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import MainLayout from '@/app/layouts/MainLayout'
import { ThemeProvider } from '@/app/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'JianGdt',
  description: 'Front-End Developer',
}

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  display:'swap',
  style: ['normal']
 })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`transition min-h-screen duration-75 ease-in font-sans ${quicksand.style.fontFamily} ${quicksand.className}`}>
        <ThemeProvider 
        attribute="class"
        enableSystem
        defaultTheme="light"
        >
          <MainLayout>
          {children}
          </MainLayout>
        </ThemeProvider>
        </body>
    </html>
  )
}
