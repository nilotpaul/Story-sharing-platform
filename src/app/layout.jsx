import Header from '@/components/Header'
import "../app/home.css"
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins(
  {
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin']
  }
)

export const metadata = {
  title: 'Story Sharing App',
  description: 'Share your stories with others',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
