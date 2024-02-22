import { Inter } from 'next/font/google';
import './globals.css';
// import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shannon IT',
  description: 'Innovative Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
