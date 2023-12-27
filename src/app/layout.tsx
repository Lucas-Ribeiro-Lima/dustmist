import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalStyle, GlobalContainer, Layout } from '@/styles/global-styles'
import StyledComponentsRegistry from '../../lib/registry'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Lima',
  description: 'Pagina de portfólio de Lucas Ribeiro Lima, visando demonstrar e explorar as habilidades que adquiri em programação em diversas aréas.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
            <GlobalContainer>
              <Layout>
                {children}
              </Layout>
            </GlobalContainer>
          </StyledComponentsRegistry>
        </body>
    </html>
  )
}
