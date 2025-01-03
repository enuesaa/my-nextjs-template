import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      <body className='bg-gray text-black font-zenkaku'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
