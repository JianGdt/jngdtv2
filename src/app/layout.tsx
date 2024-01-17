import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import MainLayout from '@/app/layouts/MainLayout'
import { ThemeProvider } from '@/app/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'JnGdt',
  description: 'JnGdt',
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
      <body className={quicksand.className}>
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
