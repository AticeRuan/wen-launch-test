import { Inter } from 'next/font/google'

import './globals.css'
import Navbar from './_components/navbar'
import Cloud from './_components/cloud'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rain Ruan - Test ',
  description: 'for the requirements of Wen Launch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white`}>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
