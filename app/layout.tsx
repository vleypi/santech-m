import Header from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Box from '@/components/Box/Box'
import Footer from '@/components/Footer/Footer'
import {NavMenu} from '@/components/NavMenu/NavMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'САНТЕХКОМПЛЕКТ-М – Комплексные поставки инженерных систем по всей России',
  description: 'Компания САНТЕХКОМПЛЕКТ-М занимается предоставлением качественных и надежных инженерных решений для различных отраслей. Мы предлагаем широкий спектр услуг, включая проектирование, поставку, монтаж и обслуживание систем водоснабжения, водоотведения, вентиляции, кондиционирования, отопления и пожаротушения.',
  keywords: 'САНТЕХКОМПЛЕКТ-М, Комплексные поставки инженерных систем по всей России, ИНН / КПП 7716985351/771601001, +7 (903) 553-65-30, santechm@inbox.ru, santech-m.ru'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-fit`}>
        <NavMenu />
        <Box>
          <Header />
        </Box>
        {children}
        <Box className='min-h-[400px] bg-[#0f4b84]'>
          <Footer />
        </Box>
      </body>
    </html>
  )
}
