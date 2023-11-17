


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Опросные листы инженерного оборудования - САНТЕХКОМПЛЕКТ-М',
  description: 'Опросные листы инженерного оборудования',
  keywords: 'САНТЕХКОМПЛЕКТ-М, Комплексные поставки инженерных систем по всей России, Опросные листы инженерного оборудования, ИНН / КПП 7716985351/771601001, +7 (903) 553-65-30, info@santech-m.ru, santech-m.ru'
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
