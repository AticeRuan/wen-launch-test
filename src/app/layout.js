import { Inter } from 'next/font/google'
import TransitionProvider from './_components/transitionProvider'
import './globals.css'
import Navbar from './_components/navbar'
import Cloud from './_components/cloud'
import localFont from 'next/font/local'

const pixeboy = localFont({ src: './_assets/Pixeboy.ttf' })

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rain Ruan - Test ',
  description: 'for the requirements of Wen Launch',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pixeboy.className} text-white bg-black `}>
        <TransitionProvider> {children}</TransitionProvider>
      </body>
    </html>
  )
}
