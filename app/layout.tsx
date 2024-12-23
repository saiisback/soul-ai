import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import Navbar from '@/components/navbar';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] }); // Adjust weights as needed

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}