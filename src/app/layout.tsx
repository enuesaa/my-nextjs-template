import { Metadata } from 'next'
import 'styled-system/styles.css'
import '@/styled-system/global.css'

type Props = {
  children: React.ReactNode,
}
export default function RootLayout({ children }: Props) {
  return (
    <>
      <html lang='ja'>
        <body>
          {children}
        </body>
      </html>
    </>
  )
}
 
export const metadata: Metadata = {
  title: 'my-nextjs-template',
  description: 'my-nextjs-template',
}