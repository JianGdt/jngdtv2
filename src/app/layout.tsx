import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from './layouts/MainLayout'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JnGdt',
  description: 'JnGdt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
