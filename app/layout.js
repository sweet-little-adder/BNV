import Footer from './component/Footer'
import Navbar from './component/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-screen/">
      <body
        className={inter.className}

      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
