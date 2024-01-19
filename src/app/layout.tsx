import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import MainLayout from '@/app/layouts/MainLayout'
import { ThemeProvider } from '@/app/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'Jian Godito',
  description: 'Front-End Developer',
}

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
 })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`transition h-full duration-75 ease-in ${quicksand.className}`}>
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
