import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import './globals.css'

export const neueMontreal = localFont({
  src: [
    // Book 300
    {
      path: '../../public/fonts/PPNeueMontreal-Book.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Book.woff',
      weight: '300',
      style: 'normal',
    },
    // Regular 400
    {
      path: '../../public/fonts/PPNeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Regular.woff',
      weight: '400',
      style: 'normal',
    },

    // Medium 500
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-Medium.woff',
      weight: '500',
      style: 'normal',
    },

    // Semi-Bold 600
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PPNeueMontreal-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
})

export const metadata: Metadata = {
  title: 'Rohan Drummond',
  description: 'Software developer. Based in New Zealand.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${neueMontreal.variable} flex flex-col min-h-dvh xl:min-h-screen`}
      >
        <div
          id="transition-overlay"
          className="bg-background fixed top-0 left-0 z-20 h-screen w-screen scale-x-0 origin-left transition-transform duration-500 ease-in-out"
        ></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
