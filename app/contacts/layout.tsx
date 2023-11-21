


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Контакная форма. Телефон: +7 (903) 553-65-30. Почта: santechm@inbox.ru. Адрес: 129343, г. Москва, вн. тер. г. муниципальный округ Свиблово, Серебрякова проезд д. 11, к. 1, помещ. 12Н/2',
  keywords: 'САНТЕХКОМПЛЕКТ-М, Комплексные поставки оборудования и материалов для инженерных систем по всей России, ИНН / КПП 7716985351/771601001, +7 (903) 553-65-30, santechm@inbox.ru, santech-m.ru'
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
