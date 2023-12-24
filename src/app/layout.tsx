import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyle } from './global-style'
import StyledComponentsRegistry from '../../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Lima Portfólio',
  description: 'Portfólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <GlobalStyle/>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}
