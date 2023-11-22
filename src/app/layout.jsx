import { Inter } from 'next/font/google'
import './globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Global Solution',
  description: 'Turma 1TDSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>

        <Header />

        {children}

        <Footer />



      </body>
    </html>
  )
}
