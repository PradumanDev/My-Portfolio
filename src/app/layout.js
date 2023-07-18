import "./globals.css";
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Praduman Tiwari - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
