


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Наши объекты ',
  description: 'Наши объекты - САНТЕХКОМПЛЕКТ-М',
  keywords: 'САНТЕХКОМПЛЕКТ-М, Комплексные поставки оборудования и материалов для инженерных систем по всей России, Опросные листы инженерного оборудования, ИНН / КПП 7716985351/771601001, +7 (903) 553-65-30, santechm@inbox.ru, santech-m.ru'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        {children}
    </>
  )
}
