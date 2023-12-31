import type { Metadata } from 'next'
import './globals.css'
import { TopNav } from './components'
import { Footer } from './components/footer/footer'
import BottomNav from './components/nav/bottomNav'
import { poppins } from '@src/util/font'
import LayoutWraper from '@src/layoutWraper'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className={poppins.className}>
      <ToastContainer
        position="top-right"
        autoClose={20000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
        <TopNav />
        <BottomNav />
        <LayoutWraper>
          {children}
        </LayoutWraper>
        <Footer />
      </body>
    </html>
  )
}
